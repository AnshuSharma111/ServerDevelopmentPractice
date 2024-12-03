const express = require('express')

app = express()

// req => middleware => res
// You always need to pass control from one middleware function to the nest after tehe execution of the first middleware function
// we can sneak in the middleware function in the get requuest app.get(url, middleware, callback function)

const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(new Date().getFullYear());
    next();
}
app.get('/', logger, (req, res) => {
    return res.status(200).send("<h1>the end is never the end</h1><br><h2>the end is never the end</h2><br><h3>the end is never the end</h3>");
})

app.listen(5000, (req, res) => {
    console.log("Listening on port 5000...")
})