console.log('Starting Script');

const MongoClient = require('mongodb').MongoClient; 
console.log('Done importing the module');
const url = 'mongodb://localhost:27017/GeoLite2';
const { ConvertIPToNumber } = require('../backend-server/index');





(async function() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 5000 });
        console.log('Successfully connected to the server');
        
        const db = client.db('GeoLite2');  
        
        /*To Display the number of documents that have already been updated: */
        const count = await db.collection('cityBlocks').countDocuments({ "startIPNumeric": { $exists: true } });
        console.log(`Number of documents updated: ${count}`);

        console.log('Successfully opened the GeoLite2 database');

        console.log('Starting to Update the database');
        await UpdateDataBase(db);
        console.log('Finished updating the database');

        client.close(); 
        console.log('Closed the connection');
    } catch (err) {
        console.log('Connection error:', err);
    }
})();


async function UpdateDataBase(db) {
    const collection = db.collection('cityBlocks');

    // Check if the collection has documents
    const docCount = await collection.countDocuments();
    console.log(`Total documents in collection: ${docCount}`);

    const cursor = collection.find();
    let counter = 0;

    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {

        if (!doc.network || typeof doc.network !== 'string') {
            console.error(`Invalid network field for document: `, doc);
            continue;  // skip to the next document
        }

        //console.log('Processing document: ', doc);

        const [startIP, mask] = doc.network.split('/');
        const startIPNumeric = ConvertIPToNumber(startIP);
        const endIPNumeric = startIPNumeric + Math.pow(2, 32 - parseInt(mask)) - 1;
        const updateResult = await collection.updateOne({_id: doc._id}, {$set: {startIPNumeric: startIPNumeric, endIPNumeric: endIPNumeric}});

        //console.log('Update Result: ', updateResult);

        counter++;
        
        if (counter % 10000 === 0) {
            console.log(`${counter} documents updated.`);
        }
        
    }

    console.log(`Update finished, total ${counter} documents updated.`);
};
