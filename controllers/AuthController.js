
var User = require('../models/user');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');







//router.get('/me', VerifyToken, function(req, res, next) {}
/*
const me = async(req,res,next)=>{
    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
     // res.status(200).send(user);
     next(user); 

     router.use(function (user, req, res, next) {
        res.status(200).send(user);
      });
    });
}
    
  */




const register =  async (req,res)=>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    User.create({
      email : req.body.email,
      password : hashedPassword
    }, 
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user`.");
  
      // if user is registered without errors
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours

      });
  
      res.status(200).send({ auth: true, token: token });
    });
    
}

    



const authcon =  async (req,res)=> {

try{
   const re= await  User.findOne({ email: req.body.email }, async function (err, user) {
    
    console.log(user)
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        
        // check if the password is valid
        
      var passwordIsValid = await bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    
        
        // if user is found and password is valid
        // create a token
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
    
        // return the information including token as JSON
        res.status(200).send({ auth: true, token: token });
      });

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}
   
   
   
    
   module.exports = {
    authcon,
    register,
  //  me
}
  