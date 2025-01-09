def validate_registration_data(data):
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
        "confirm_password"
    ]

    for field in required_fields:
        if field not in data or not data[field]:
            return False, f"{field} is required."

    # Additional validations can go here (e.g., email format, password strength, etc.)
    return True, "Valid data."
