const express = require('express')
const path = require('path')

app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send("Not Found!");
})

app.listen(5000, () => {
    console.log("App is listening on Port 5000....");
})