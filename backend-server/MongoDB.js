const MongoClient = require('mongodb').MongoClient; //MongoClient is a constant variable assigned to the MongoClient object of the mongodb module
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, async (err, client) => {
    if (err) 
    throw err;
    /*At this point, client object contains all the databases in the MongoDB server
    you've connected to: */
    
    // Assigning db const variable with the GeoLite2 database:
    const db = client.db('GeoLite2');  

    //Call Update Function Here: 
    await UpdateDataBase(db);

    client.close(); 
}
)


async function UpdateDataBase(db)
{
    //Assigning the const collection variable with a collection object pointing to cityBlocks:
    const collection = db.collection('cityBlocks');

    /*The find function matches all the documents in the collection
    since the query string is empty {No conditions}
    
    These matched documents are converted into an array to make it easier to manipulate*/
    const documents = await collection.find({}).toArray();

    for(let i=0; i<documents.length; i++)
    {
        doc=documents[i];
        const [startIP, mask] = doc.network.split('/'); // Extract the starting IP and mask from the CIDR notation

        const startIPNumeric = convertIPToNumber(startIP);
        const endIPNumeric = startIPNumeric + Math.pow(2, 32 - parseInt(mask)) - 1; // Calculate the numeric representation of the end IP

        await collection.updateOne({_id: doc._id}, {$set: {startIPNumeric: startIPNumeric, endIPNumeric: endIPNumeric}});

    }

    /*The async function returns a promise object which has been resolved */
    /*In this case, it has been resolved with an undefined value: */

};






