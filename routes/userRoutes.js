const express = require('express')
const router = express.Router();
const {getAllUsers,getUserByEmail} = require('../controllers/userController')


// get all books
//@Route Get  /api/users  
router.get('/',getAllUsers) 


// get  book by name
//@Route Get  /api/users/:name  
router.get('/:name',getUserByEmail)

 


module.exports = router