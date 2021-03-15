const Author = require('../models/author')
const Book = require('../models/book')

const getAllAuthors = async (req,res)=> {

    try{

       const authors = await Author.find({});
       res.json(authors);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

const getAuthorByName = async (req,res)=> {

    try{

       const author = await Author.findOne({name:req.params.name});
       res.json(author);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}





module.exports = {
    getAllAuthors,
    getAuthorByName,
}