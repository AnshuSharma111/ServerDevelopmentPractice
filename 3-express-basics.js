const express = require('express')
const path = require('path')

app = express()

// setup static assets and middleware
// Static assets are files that a server does not have to change
app.use(express.static('public'))

// Routes Http GET requests to the given path with the given callback function
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
})

// Routes all http requests like GET, POST, DELETE etc
app.all('*', (req, res) => {
    res.status(404).send("Not Found!");
})

app.listen(5000, () => {
    console.log("App is listening on Port 5000....");
})

/* This is how we can use express to make our lives easier. Just dump all the static files (that do not change structure during execution) such as CSS files or Logos or SVG files or JS files
 in the public folder and let express deal with them. In this manner, if we have a large website with a lot of static files, we do not have to manually serve them for each request like we had to do
 in the case of using html. Now, HTML files are not considered static as we can add, through javascript code, new elements to our html files. But in case we do not have any dynamically changing HTML
 files, we can dump them too, in our public folder as shown in 4*/