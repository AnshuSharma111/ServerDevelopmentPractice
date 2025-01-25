const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

let dbSub = []

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/form2.html'));
})

app.get('/submit', (req, res) => {
    res.status(200).json({success : true, data : dbSub});
})

// Define a POST route to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required!' });
    }

    console.log('Form submission received:', { name, email });
    dbSub.push({name : name, email : email});
    // Send a success response
    res.status(201).json({ message: 'Form submitted successfully!', data: { name, email } });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
