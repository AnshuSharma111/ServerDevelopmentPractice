let persons = [];

const getPersons = (req, res) => {
    res.status(200).json(persons);
}

const createPerson =  (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400).json({success : false, message : "Invalid name or age"});
    }
    persons.push({name : name, age : age});
    res.status(201).json({success : true, message : "Added Person Successfully!"});
};

const updatePerson = (req, res) => {
    const { name, age } = req.query;
    const { newName, newAge } = req.body;
    if (!name || !age) {
        res.status(400).json({success : false, message : "Invalid name or age"});
    }
    const person = persons.find(person => person.name == name && person.age == age);
    if (!person) {
        res.status(404).json({success : false, message : "No such person found"});
    }
    person.name = newName;
    person.age = newAge;
    res.status(200).json({success : true, message : "Successfully updated person data"});
};

const deletePerson = (req, res) => {
    const {name, age} = req.body;
    if (!name || !age) {
        res.status(400).json({success : false, message : "Invalid name or age"});
    }
    const person = persons.find(person => person.name == name && person.age == age);
    if (!person) {
        res.status(404).json({success : false, message : "No such person found"});
    }
    persons = person.filter(person => person.name != name && person.age != age);
    res.status(200).json({success : true, message : "Successfully deleted person data"});
};

const invalidRoute = (req, res) => {
    res.status(400).json({success : false, message : "Invalid Route!"});
};

module.exports = { getPersons, createPerson, updatePerson, deletePerson, invalidRoute };