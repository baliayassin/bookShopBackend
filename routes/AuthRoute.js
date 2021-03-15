const express = require('express')
const router = express.Router();
const {authcon,register} = require('../controllers/AuthController')

const VerifyToken = require('../controllers/VerifyToken');



//router.get('/me',VerifyToken,me)
router.post('/register',register)
router.post('/login',authcon)


module.exports=router