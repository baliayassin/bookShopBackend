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

       const book = await Book.findOne({name:req.params.name});
       res.json(book);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

/*
const insertBook = async (req,res)=> {

    var book = JSON.stringify({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price 
        
      })
      console.log(req.body)
      book.save(function (err, books) {
        if (err) { return next(err) }
        res.json(201, books)
      })
   

}*/


const insertBook = async (req,res,next)=> {

    let book = new Book({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price 
    })
    book.save()
    .then(response=>{
        res.json({
            book 
        })
    }).catch(error =>{res.json({
        message:"an error occured"
    })
})

}

const updateBook = async (req,res)=> {

    var id = req.params.id;
    Book.findOne({_id:id},(err,findObj)=>{

      findObj.price= req.body.price
  
  findObj.save(function(err,upD){
    if (err) { return next(err) }
    res.json(201, upD)
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