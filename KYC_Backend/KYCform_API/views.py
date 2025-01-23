from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .db_mongo import insert_record

class KYCFormAPIView(APIView):
    def post(self, request):
        try:
            # Extract data from the request
            data = request.data

            # Prepare the KYC data
            kyc_data = {
                "personal_details": data.get("personal_details", {}),
                "address_details": data.get("address_details", {}),
                "documents": data.get("documents", {}),
                "kyc_status": "Pending",  # Default status
            }

            # Insert the data into MongoDB
            result = insert_record(kyc_data)

            return Response(
                {"message": "KYC details submitted successfully!", "id": str(result.inserted_id)},
                status=status.HTTP_201_CREATED
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
