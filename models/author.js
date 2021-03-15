const mongoose = require('mongoose');
const Book = require('../models/book')


const bookSchema= new mongoose.Schema({

    name:{
        type:String,
        
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    
})

const authorSchema = new mongoose.Schema({
   
    
    name:{
        type:String,
        required:true
        
    },
    books:[bookSchema]
   
    
    
})

const Author = mongoose.model('author',authorSchema);

module.exports = Author