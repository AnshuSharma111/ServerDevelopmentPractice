const express = require('express');
const path = require('path');
const  {logger, apiOnly} = require('./middleware-exports');

const app = express();

app.use(express.static("public")) // serving static files
app.use(logger)    // middleware
app.use('/api', apiOnly) // middleware served to specific routes

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "src/index.html"));
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "src/about.html"));
})

app.get('/api', (req, res) => {
    if (req.access == 1){
        res.send("<h1>Access Granted</h1>");
    }
    else{
        res.send("<h1>Access Denied</h1>");
    }
})
app.all('*', (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(5000, () => {
    console.log("listening atport 5000...");
})