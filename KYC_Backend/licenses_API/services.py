import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_verification_email(recipient_email, verification_link):
    sender_email = "your_email@example.com"
    sender_password = "your_email_password"
    subject = "KYC Verification - License Assignment"

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = subject

    body = f"""
    Hello,

    You have been assigned a KYC license. Click the link below to start the verification process:
    {verification_link}

    Regards,
    KYC Team
    """
    message.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, message.as_string())
        server.quit()
        return {"message": "Email sent successfully"}
    except Exception as e:
        return {"error": str(e)}
