const { json } = require('body-parser');
const Admin = require('../models/admin')
const Book = require('../models/book')

const getAllBooks = async (req,res)=> {

    try{

         
       const admins = await Admin.find();
       res.json(admins);
      

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
       
       //  return res.send(201, book)
         res.status(201).send(book)
       //res(201)
       //res.status(200).send(res.json(book));
      })
   
}


const getUserByEmail = async (req,res)=> {

    try{

       const user = await User.findOne({name:req.params.email});
       res.json(user);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}


module.exports = {
    getAllBooks,
    insertBook
    
}