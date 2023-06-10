const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function connect() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('Connected to MongoDB');
    // Get a reference to the database
    const database = client.db('myapp');
    // Get a reference to the users collection
    const collection = database.collection('user');
    return collection;
  } catch (e) {
    console.error(e);
  }
}

module.exports = { connect };
