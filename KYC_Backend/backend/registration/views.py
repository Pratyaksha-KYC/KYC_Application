from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from backend.mongodb import users_collection  # Use your MongoDB connection

@csrf_exempt  # Disable CSRF protection for simplicity (optional in development)
def register_user(request):
    if request.method == "POST":
        try:
            # Parse the incoming JSON data from the request
            data = json.loads(request.body)

            # Extract user details
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')

            # Add user data to MongoDB
            user_data = {
                "name": name,
                "email": email,
                "password": password,
                "kyc_status": "pending"  # Set default KYC status
            }
            users_collection.insert_one(user_data)

            # Return success response
            return JsonResponse({"message": "User registered successfully!"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)
