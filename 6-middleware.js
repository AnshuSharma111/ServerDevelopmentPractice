const express = require('express')

app = express()

// req => middleware => res
app.get('/', (req, res) => {
    return res.status(200).send("<h1>Why do I love her?</h1><br>What makes  her so desirable to me? THere literally is no reason. It's plain old lust? No it's not lust. It's something else entirely");
})

app.listen(5000, (req, res) => {
    console.log("Listening on port 5000...")
})