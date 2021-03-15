const express = require('express')
const router = express.Router();
const {getAllBooks,getBookByName,insertBook,updateBook,deleteBook} = require('../controllers/bookControllers')


// get all books
//@Route Get  /api/books  
router.get('/',getAllBooks) 


// get  book by name
//@Route Get  /api/books/:name  
router.get('/:name',getBookByName)

 //post insert book
 // @ route post /api/books/insert
router.post('/insert',insertBook)


// put update book 
//@ route put /api/books/update/:id
router.put('/:id',updateBook)


// del delete book 
//@route del /api/books/delete/:name
router.delete('/:name',deleteBook)
module.exports = router