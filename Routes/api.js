const express = require('express');
const { getPersons, createPerson, updatePerson, deletePerson, invalidRoute } = require('../Controllers/api'); 

const router = express.Router();

// Routes
router.route('/persons').get(getPersons);
router.route('/create').post(createPerson);
router.route('/update').put(updatePerson);
router.route('/delete').delete(deletePerson);
router.route('*').all(invalidRoute);

module.exports = router;