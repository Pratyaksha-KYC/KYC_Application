from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import validate_registration_data
from .db_mongo import collection

class RegisterView(APIView):
    def post(self, request):
        data = request.data
        is_valid, message = validate_registration_data(data)

        if not is_valid:
            return Response({"error": message}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Insert the data into MongoDB
            collection.insert_one(data)
            return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
