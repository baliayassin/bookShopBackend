const User = require('../models/user')


const getAllUsers = async (req,res)=> {

    try{

       const users = await User.find({});
       res.json(users);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
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
    getAllUsers,
    getUserByEmail,
}