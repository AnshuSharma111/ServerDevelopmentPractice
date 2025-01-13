const express = require('express');
const { logger, apiOnly } = require('./middleware-exports');

const app = express();

// serving middleware to routes that start with /api
app.use('/api', apiOnly);
app.use(express.static('public'));

// applying logger to every path
app.use(logger);

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/index.html'))
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