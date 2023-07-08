const express = require('express'); // imports the express.js module from the node.js module
const app = express(); // Creates an instance of the express.js module - obtain an express.js framework
const port = 3001; // Defines the port number in which the server will run 

// 'req' argument contains info about incoming request and 'res' contains info about the response
// When a request is sent to the server, 'res' (the HTTP response) sends back Hello World
app.get('/', (req, res) => { 
  res.send('Hello World!');
});


//This line starts the server and makes it listen for requests in the specified port: In this case - 3001. 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`); // This second argument is displayed as confirmation that the server is up and running 
});
