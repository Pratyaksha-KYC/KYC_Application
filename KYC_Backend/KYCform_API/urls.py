from django.urls import path
from .views import KYCFormAPIView

urlpatterns = [
    path('kyc/', KYCFormAPIView.as_view(), name='kyc-form'),
]
