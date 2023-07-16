console.log('Starting Script');

const { MongoClient } = require('mongodb');
console.log('Done importing the module');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('Successfully connected to the server');
    } catch (err) {
        console.log('Connection error:', err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
