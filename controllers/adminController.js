const Admin = require('../models/admin')
const Book = require('./bookControllers')

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

    Book.insertBook()
}

/*
const getUserByEmail = async (req,res)=> {

    try{

       const user = await User.findOne({name:req.params.email});
       res.json(user);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

*/
module.exports = {
    getAllBooks,
    insertBook
    
}