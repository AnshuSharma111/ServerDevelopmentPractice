const express = require('express');
const apiRouter = require('./Routes/api');

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
})