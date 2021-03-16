const express = require('express')
const router = express.Router();
const {getAllBooks} = require('../controllers/adminController')
const {insertBook} = require('../controllers/adminController')
//const {insertBook} = require('../controllers/bookControllers')

// get all books
//@Route Get  /api/books
router.get('/books',getAllBooks) 


// post  insert book
//@Route Get  /api/admin/insert
router.post('/insert',insertBook)

module.exports = router