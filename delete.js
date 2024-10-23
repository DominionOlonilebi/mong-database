const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string if needed
const dbName = 'Bookstore';

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("Connected successfully to MongoDB server");

    // Select the database
    const db = client.db(dbName);

    // Select the collection (like a table in SQL)
    const collection = db.collection('author'); 

     // Delete a document (DELETE)
        const deleteResult = await collection.deleteOne({ name: "Alice" });
        console.log("Deleted document count:", deleteResult.deletedCount);

} finally {
    // Close the connection
    await client.close();
  }
}

// Run the main function
main().catch(console.error);