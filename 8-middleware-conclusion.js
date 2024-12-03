const express = require('express');
const { logger, apiOnly } = require('./middleware-exports');

const app = express();

// serving middleware to routes that start with /api
app.use('/api', apiOnly);
// applying logger to evvery path
app.use(logger);

app.get('/', (req, res) => {
    res.send(homePage);
})

app.get('/api', (req, res) => {
    res.send('<h1>Squabble up, bitch</h1>');
})

app.get('/api/versions', (req, res) => {
    res.send("<h1>I feel good get tf out my face</h1><br><h2>Look good but she don't got no taste</h2>");
})

app.listen(5000, () => {
    console.log("Listening on port 5000...");
})