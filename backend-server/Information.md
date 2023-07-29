# Information

## Types of Languages:
There exist two types of languages: Markup Languages and Programming Languages.
- Markup Languages: They are used to structure and format documents E.g. HTML, Markdown etc. 
- Programming Languages: They are used to provide functionality. E.g. C++, Java, JavaScript etc.

## Types of HTTP Requests:

- **GET** Request: Used to retrieve data from the server. It is the default request sent {to a server} when you access a URL.
- **POST** Request: Used to provide data to a server to typically add/modify a database.

**Note:** All HTTP requests are **SENT** to the server.

**fetch:**
- It is an in-built JavaScript method (Not part of the Express.js framework)
- It can be used to make **all** types of HTTP requests (including GET and POST) to a server.
- It is an **asynchronous** function whose promise resolves to the response object.

## Important Coding Snippets:

1. 
``` javascript
app.get('/ip/:address', (req, res) => {}
); 
```

- `app ` has been assigned to an application object of the Express.js module. 
- **:address** signifies that the address variable is a route parameter. It can be accessed from req.param.address. 
- When a **GET** request is received at `'/ip/:address'`, the arrow function is executed {The body is currently blank}

2. 
``` javascript
 let result=await collection.findOne({
        startIPNumeric: {$lte:ipAddress }, 
        endIPNumeric: {$gte: ipAddress}
    })
```
- findOne is a member function within the collection class in the MongoDB module: It is **NOT** provided by JavaScript by default unlike the **fetch** method.
- The function returns the **first** document object which matches the query parameters.
- $lte: less than or equal to  
  $gte: greater than or equal to

## IP Addresses:
**IPv4** is a fomrat for representing a single IP Address: 
- It comprises of the format X.X.X.X (where X can range from 0 to 255)
- Each **X** occupies 8 bits. Hence it totally occupies 32 bits.

**CIDR Notation**
Let's understand this using an example 1.0.0.0/24
- Here, 1.0.0.0 is a single IP address in IPv4 format.
- The number after the (**/**) is called the routing prefix.
- The routing prefix indicates the number of leading bits of the single IP address is constant.
- The remaining bits of the IP address can vary as long as they satisfy the IPv4 format.
- Hence, in this case we have range of IP address 1.0.0.X (where X is from 0 to 255).
- Hence, we can represent **a range of IPv4 IP addresses** using the CIDR Notation.

## Callback functions ##
- A callback function {in JavaScript} is a function passed as an argument inside another function.
- A callback function can either be pre-defined OR defined only when called {Instantaneous Definition}.
- It is achieved using the `function` keyword when using traditional syntax
- E.g: 
``` javascript
MongoClient.connect(url, function(err, client) {
    if (err) 
    throw err;
    
    const db = client.db('your_database_name');  // replace with your database name
    }
)
```
## `async` and `await` Keyword ##
- `async` is a keyword used to define an **asynchronous** function.
- An asynchronous function **always** returns a **promise**.
- A **promise** is an object whose values may or may not be available yet but will be in the future.
- A promise is said to be **resolved** if the value of the object is now available.
- The `await` keyword can **only** be used beside a statement inside an asynchronous function.
- It makes sure that the statement that it is beside finishes executing before proceeding to the next one.
- JS is single-threaded unlike C++ and hence can proceed to the next statement before it finishes executing the current one.

## General Pointers:












            