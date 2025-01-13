const express = require('express')
const path = require('path')
const { logger, apiOnly } = require('./middleware-exports')

app = express()
app.use(express.static('public'))
app.use(logger)
app.use(express.urlencoded({ extended: false }))

app.get('/form/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/form.html'));
})

app.post('/submit', (req, res) => { 
    console.log(req.body);
    const { name, email } = req.body;
    if (!name || !email){
        res.status(400).send('Please provide name and email');
    }
    res.status(200).send(`Thank you <h1>${name}</h1> for submistting your email <h1>${email}</h1>`);
})
app.listen(5000, () => {
    console.log('listening on port 5000...');
})