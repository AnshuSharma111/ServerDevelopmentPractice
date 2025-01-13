const express = require('express')

const app = express()

// sending json data back
app.get('/', (req, res) => {
    res.json([{name : "Anshu"}, {name : 'mf'}])
})
``
// we can also use route params. They are defined by using colon and then parma name in abse path
const data = [{id : 1, name : 'anshu', surname : 'sharma', Age : '18', desc : "Cool mfker"}, 
            {id : 2, name : 'past', surname : 'history', Age : '19', desc : "squabble up"}, 
            {id : 3, name : 'arpit', surname : 'pathania', Age : '19', desc : "the singular NPC"}, 
            {id : 4, name : 'parv', surname : 'gupta', Age : '19', desc : "The underfed ass"}]
app.get('/:name/:surname', (req, res) => {
    console.log(req.params);
    const {name, surname} = req.params;
    const response = data.filter((obj) => obj.name === name && obj.surname === surname);
    res.json(response);
})

// we can also use query params. These parmas do not send back error if the hard coded url is not provided
app.get('/api/v1/query', (req, res) => {
    const {name, surname } = req.query;
    allData = [...data]
    if (name){
        allData = allData.filter((obj) => obj.name === name);
    }
    if (surname){
        allData = allData.filter((obj) => obj.surname === surname);
    }

    // Return every data ifno params
    res.status(200).json(allData) 
    //res.send("Wouldn't you know? We've been down been hurt before<br>Nigga, When our pride was low, looking at the world like where do we go?<br>Nigga, and we hate Po-Po. Wanna kill us dead in the street fo-sho!");
})
app.listen(5000, (req, res) => {
    console.log("istening on port 5000...")
})