from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb+srv://shrisontakke:shri123@pratyaksha-kyc.32uio.mongodb.net/?retryWrites=true&w=majority&appName=Pratyaksha-kyc')

# Select a database and collection
db = client.get_database('KYC')
collection = db['KYC_Details']


# Create
def insert_record(record):
    return collection.insert_one(record)

# Read
def find_record(query):
    return collection.find_one(query)

# Update
def update_record(query, update_data):
    return collection.update_one(query, {'$set': update_data})

# Delete
def delete_record(query):
    return collection.delete_one(query)