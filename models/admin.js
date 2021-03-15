const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
   
    
    name:{
        type:String,
        required:true
        
    },
    _id:{
       type:Number,
       required:true
    }
   
   
})

const Admin = mongoose.model('admin',adminSchema);

module.exports = Admin