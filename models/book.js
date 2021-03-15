const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
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

const book = mongoose.model('book',bookSchema);

module.exports = book