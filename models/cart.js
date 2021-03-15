const mongoose = require('mongoose');



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
    purchasedDate:{
        type:Date
    }
    
})


const cartSchema = new mongoose.Schema({
   
    name:{
        type:String,
        
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    purchasedDate:{
        type:Date
    } 
   
 
})

const cart = mongoose.model('cart',cartSchema);

module.exports = cart