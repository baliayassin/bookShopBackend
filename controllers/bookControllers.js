const { response } = require('express');
const Book = require('../models/book')


const getAllBooks = async (req,res)=> {

    try{

       const books = await Book.find({});
       res.json(books);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

const getBookByName = async (req,res)=> {

    try{

    //   const book = ;
       res.json(await Book.findOne({name:req.params.name}));

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

const insertBook = async (req,res)=> {

    var book = new Book({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        
      })
      book.save(function (err, book) {
        if (err) { return next(err) }
        res.json(201, book)
      
      })
   

}

const updateBook = async (req,res)=> {

    var id = req.params.id;

    /*
Book.findByIdAndUpdate({_id:id},
    
    {price:req.body.price},
    function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    
 )
*/

   Book.findOne({_id:id},(err,findObj)=>{

      findObj.price= req.body.price
  
  findObj.save(function(err,upD){
    if (err) { return next(err) }
    res.json(201,upD)
    
  })
    })
    
 
} 

const deleteBook = async (req,res)=> {
    try{

         await Book.findOneAndDelete({ name: req.params.name }, function (err) {
            if(err){ console.log(err);
                return res.status(500).send()
            }
            console.log("Successful deletion");
            res.status(200).send();
          })
         
        
 
     }catch(err){
         console.log(err)
         res.status(500).json({message:"server error"});
     }
 
}

module.exports = {
    getAllBooks,
    getBookByName,
    insertBook,
    updateBook,
    deleteBook
}