from pymongo import MongoClient

# Replace with your MongoDB connection string
CONNECTION_STRING = "mongodb+srv://shrisontakke:Shri@123@cluster0.mongodb.net/kyc_database?retryWrites=true&w=majority"

# Establish a connection to MongoDB
client = MongoClient(CONNECTION_STRING)

# Select the database
db = client['kyc_database']

# Example: Select a collection
users_collection = db['users_collection']

# Function to insert a test document
def insert_test_document():
    test_document = {"name": "Test User", "email": "testuser@example.com"}
    users_collection.insert_one(test_document)
    print("Test document inserted!")
