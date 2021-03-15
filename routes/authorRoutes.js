const express = require('express')
const router = express.Router();
const {getAllAuthors,getAuthorByName} = require('../controllers/authorController')


// get all books
//@Route Get  /api/authors 
router.get('/',getAllAuthors) 


// get  book by name
//@Route Get  /api/author/:name  
router.get('/:name',getAuthorByName)

 


module.exports = router