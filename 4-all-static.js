const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './src/index.html'))
})

app.all("*", (req, res) =>{
    res.status(400).write("404 Not Found!")
})

app.listen(5000, () => {
    console.log("Listening on Port 5000...")
})