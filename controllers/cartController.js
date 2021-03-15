const Cart = require('../models/cart')


const getAllBooks = async (req,res)=> {

    try{

   //const books = await Cart.find({});
       const boo = await Cart.find({}).sort({purchasedDate: 1})
       res.json(boo);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}

const getBookByName = async (req,res)=> {

    try{

       const book = await Cart.findOne({name:req.params.name});
       res.json(book);

    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error"});
    }
}


const insertBook = async (req,res)=> {

    var cart = new Cart({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        purchasedDate: Date.now()
      })
      cart.save(function (err, cart) {
        if (err) { return next(err) }
        res.json(201, cart)
      })
   

}




module.exports = {
    getAllBooks,
    getBookByName,
    insertBook
}