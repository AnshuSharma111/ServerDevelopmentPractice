const express = require('express')
const logger = require('./middleware-exports')

const app = express();
app.use(logger); 
// now the middleware logger will be called for all routes
// If we want the middleware to only be used by a subset of routes, then we can specify those urls in the app.use method
// For instance, specifying app.use('/api', logger) will aplly the logger middleware to every url that starts with /api

app.get('/', (req, res) => {
    res.send("<h1>Fuck apologies I wanna see yall geeked up</h1><br><h2>Miss my uncle lil'Maine he said he would kill me if I didn't make it</h2>");
})

app.get('/items', (req, res) => {
    res.send("<h1>Few solid niggas left but its not enough</h1><br><h2>Few bitches that'll really step but its not enough</h2>");
})

app.get('/about', (req, res) => {
    res.send("<h1>More blood be spilling its just paint to me</h1><br><h2>Flip a coin, want the shameless me or the famous me?</h2>");
})

app.listen(5000, () => {
    console.log("App is listening on port 5000...");
})