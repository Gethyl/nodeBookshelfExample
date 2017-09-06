const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const _ = require('lodash')

const bcrypt = require('bcrypt')

const bookshelf = require('../bookshelf')
const Users = require('../models/Users')

/* GET users listing. */
router.get('/', (req, res, next) => {
  Users.forge().fetch()
  .then(users=> {
    console.log(chalk.cyan.bold("Fetch success > "),users.attributes)
    res.status(200).json(users)
  })
  .catch(error => {
    console.log(chal.red('Error'),error)
    res.status(500).json(error)
  })
  
});

/* INSERT or UPDATE user */
router.get('/', (req, res, next) => {
  Users.forge().fetch()
  .then(users=> {
    console.log(chalk.cyan("Fetch success > "),users.attributes)
    res.status(200).json(users)
  })
  .catch(error => {
    console.log(chal.red('Error'),error)
    res.status(500).json(error)
  })
  
});

router.post('/insert', (req, res, next) => {
  const SALT_ROUNDS = 10
  const pickedObject = _.pick(req.body,'password','name','role')
  const encryptedPassword = bcrypt.hashSync(pickedObject.password,SALT_ROUNDS)
  new Users({
    name:pickedObject.name,
    password:encryptedPassword,
    role:pickedObject.role
  }).save()
  .then(model => {
    console.log(chalk.cyan("Insert success > "),model)
    // console.log(chalk.magenta(bcrypt.compareSync('gethyl', encryptedPassword)));
    res.status(200).json(model)
  })
  .catch(error => {
    console.log(chal.red('Error'),error)
    res.status(500).json(error)
  })
  
});

module.exports = router;