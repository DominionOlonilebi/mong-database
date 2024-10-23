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

    // Data for five authors
    const authorData = [
      { name: "Alice", email: "alice@example.com", genre: "Fantasy" },
      { name: "Bob", email: "bob@example.com", genre: "Science Fiction" },
      { name: "Charlie", email: "charlie@example.com", genre: "Mystery" },
      { name: "Diana", email: "diana@example.com", genre: "Romance" },
      { name: "Evan", email: "evan@example.com", genre: "Thriller" },
    ];

    // Insert multiple documents (CREATE)
    const insertResult = await collection.insertMany(authorData);
    console.log("Inserted documents:", insertResult.insertedIds); // Array of inserted IDs

  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the main function
main().catch(console.error);