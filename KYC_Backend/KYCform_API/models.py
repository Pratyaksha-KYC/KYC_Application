
from django.db import models

class KYC(models.Model):
    # Personal Details
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    marital_status = models.CharField(max_length=20)
    citizenship = models.CharField(max_length=100)
    fathers_name = models.CharField(max_length=100)
    mothers_name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='photos/')

    # Address Details
    house_flat_no = models.CharField(max_length=50)
    colony_building_name = models.CharField(max_length=100)
    street_road_name = models.CharField(max_length=100)
    city_town_village = models.CharField(max_length=100)
    pin_code = models.CharField(max_length=10)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=15)
    email_id = models.EmailField()

    # Document Details
    aadhaar_card = models.FileField(upload_to='documents/', null=True, blank=True)
    pan_card = models.FileField(upload_to='documents/', null=True, blank=True)
    driving_license = models.FileField(upload_to='documents/', null=True, blank=True)
    voters_identity_card = models.FileField(upload_to='documents/', null=True, blank=True)
