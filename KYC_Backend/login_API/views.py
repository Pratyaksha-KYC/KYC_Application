from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .db_mongo import collection


class LoginView(APIView):
    def post(self, request):
        data = request.data

        # Check if email or phoneNumber is provided
        if "email" not in data and "phoneNumber" not in data:
            return Response(
                {"error": "Email or phone number is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Check if password is provided
        if "password" not in data or not data["password"]:
            return Response(
                {"error": "Password is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Retrieve user by email or phone number
            user = collection.find_one({"$or": [{"email": data.get("email")}, {"phoneNumber": data.get("phoneNumber")}]})

            if not user:
                return Response(
                    {"error": "User not found. Please check your email or phone number."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            # Validate the password
            if not check_password(data["password"], user["password"]):
                return Response(
                    {"error": "Invalid password."},
                    status=status.HTTP_401_UNAUTHORIZED,
                )

            # Return success response
            return Response(
                {
                    "message": "Login successful!",
                    "user": {
                        "firstName": user["firstName"],
                        "lastName": user["lastName"],
                        "email": user["email"],
                        "phoneNumber": user["phoneNumber"],
                    },
                },
                status=status.HTTP_200_OK,
            )

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
