from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .db_mongo import collection
from datetime import datetime
from .utils import validate_email_format, validate_password_strength


class RegisterView(APIView):
    def post(self, request):
        data = request.data

        # Check if all required fields are present
        required_fields = [
            "first_name",
            "last_name",
            "dob",
            "gender",
            "email",
            "phone_number",
            "street_address",
            "city",
            "state",
            "postal_code",
            "country",
            "password",
        ]

        for field in required_fields:
            if field not in data or not data[field]:
                return Response(
                    {"error": f"{field} is required."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        # Validate email format
        if not validate_email_format(data["email"]):
            return Response(
                {"error": "Invalid email format."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate password strength
        is_strong, password_message = validate_password_strength(data["password"])
        if not is_strong:
            return Response(
                {"error": password_message},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Check for duplicate email or phone number
            existing_user = collection.find_one(
                {"$or": [{"email": data["email"]}, {"phone_number": data["phone_number"]}]}
            )
            if existing_user:
                return Response(
                    {"error": "Email or phone number already exists."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Hash the password before saving
            data["password"] = make_password(data["password"])

            # Add created_at and updated_at timestamps
            data["created_at"] = datetime.utcnow()
            data["updated_at"] = datetime.utcnow()

            # Insert the data into MongoDB
            collection.insert_one(data)

            return Response(
                {
                    "message": "Registration successful!",
                    "user": {
                        "first_name": data["first_name"],
                        "last_name": data["last_name"],
                        "email": data["email"],
                        "phone_number": data["phone_number"],
                    },
                },
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
