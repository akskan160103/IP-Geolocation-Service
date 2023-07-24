const express = require('express'); // express is a constant variable which is assigned to an express.js module: A module contains specific files which offer functionality of the node package; HOWEVER, I will use it interchangeably

/* app is a constant variable assigned to an application object of the express.js module
An application object of a module can be used to access methods defined in the package*/
const app = express(); 

const port = 3001; // Defines the port number in which the server will run 

//This line starts the server and makes it listen for requests in the specified port: In this case - 3001. 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`); // This second argument is displayed as confirmation that the server is up and running 
});

/*This is just for practice and understanding:*/
// '/' refers to the root url where the application object (assigned to app) is listening to incoming requests
// When a GET request is sent to '/.....': A url within Port 3000, execute the arrow function.
// req, res are objects which contain information about the GET request and response.
// Hello World is displayed on the screen
app.get('/', (req, res) => { 
  res.send('Hello World Pencho!');
}); 

app.get('/ip/:address', (req, res) => {
const ipAddress=req.params.address;
try{
  IPQuery(ipAddress).then((object) => {
    res.send(object);
  } );

}
/*Note: error is the name of a reference to the Error object that was thrown: */
catch (error)
{
  res.status(404); // This is the standard convention BUT it is not necessary:
}

}); 









