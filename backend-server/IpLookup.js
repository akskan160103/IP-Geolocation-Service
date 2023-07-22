const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/GeoLite2';
const { ConvertIPToNumber } = require('../backend-server/index');

const IPQuery = async (ipAddress) =>
{
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 5000 });
    const db = client.db('GeoLite2');  
    const collection=db.collection('cityBlocks');
    let numericIpAddress=ConvertIPToNumber(ipAddress);

    // Note: findOne is a member function of the <collection> object within the MongoDB module:
    // result is a variable assigned to the document in cityBlocks collection that matches the query parameters:
    let cityBlocksDoc=await collection.findOne({
        startIPNumeric: {$lte:numericIpAddress}, 
        endIPNumeric: {$gte: numericIpAddress}
    })

    // <result> will be null if no document in the collection matched the query parameters:
    if(cityBlocksDoc == null)
    {
        throw Error('No matching document in cityBlocks');
    }
    
    const cityLocationsCollection=db.collection('cityLocations');
    let cityLocationsDoc;

 
    cityLocationsDoc=await cityLocationsCollection.findOne({
        geoname_id: cityBlocksDoc.geoname_id
    });
    
    //info is a variable assigned to the value returned by the function:
    let info = Display(cityBlocksDoc, cityLocationsDoc);

    return info; //This is the value of the resolved promise:

    client.close();
}

module.exports.IPQuery=IPQuery;



function Display(cityBlocksDoc, cityLocationsDoc)
{
    let info={}; //Declaring an empty object:

    //Note: Attributes can be added to objects instantaneously without previous declaration
    //Think of objects in JS as an <unordered_map> in C++
    if(cityBlocksDoc != null)
    {
        info.network=(cityBlocksDoc.network || 'Unavailable');
        info.longitude=(cityBlocksDoc.longitude || 'Unavailable');
        info.latitude=(cityBlocksDoc.latitude || 'Unavailable');
    }
    else
    {
        info.network= 'Unavailable';
        info.longitude='Unavailable';
        info.latitude='Unavailable';
    }
    if(cityLocationsDoc != null)
    {
        info.subdivision=(cityLocationsDoc.subdivision_1_name || 'Unavailable');
        info.city=(cityLocationsDoc.city_name || 'Unavailable');
        info.country=(cityLocationsDoc.country_name || 'Unavailable');
    }
        
    else
    {
        info.subdivision= 'Unavailable';
        info.city='Unavailable';
        info.country='Unavailable';
    }

    return info;
}