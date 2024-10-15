const express = require('express')

const app = express()

// Get responds to the HTTP get method. It takes in a path [the resource it needs to GET] and a callback function with 2 arguments. REQ and RES
app.get('/', (req, res) => {
    console.log("Gang signs at the window ya bish");
    res.status(200).send("Home Page");
})

app.get('/about', (req, res) => {
    console.log("Home invasion was persuasive, was persuasive. From 9 to5 I know its vacant ya bish");
    res.status(200).send("This is how it ends. I feel chemicals burning in my bloodstream.");
})

// ALL loads middleware functions for ALL http methods. Used for 404 response [For all paths. If resource is not found. * represents all]
app.get('*', (req, res) => {
    console.log("All the voices in my mind. Calling out across the lines. Tell me when it kicks in.");
    res.status(404).send("Not Found the requested resource");

})

app.listen(5000, () => {
    console.log(`Server is listening on port : 5000`);
})

// GET
// POST
// PUT
// DELETE

// USE : For middleware
// LISTEN

// res.status() is used to return status of request in form of code (200, 404 etc) and these methods can also be chained together like app.status().send()
// So far, we have not done anything majorly different from a regular HTTP server. This was just an illustration to show how to serve only html files. We deal with CSS and other files in 3)