const express = require('express')
const router = express.Router();
const {getAllBooks,getBookByName,insertBook} = require('../controllers/cartController')


// get all books
//@Route Get  /api/cart  
router.get('/',getAllBooks) 


// get  book by name
//@Route Get  /api/cart/:name  
router.get('/:name',getBookByName)

 // post  book by name
//@Route post  /api/cart/insert
router.post('/insert',insertBook)

module.exports = router