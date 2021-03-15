
const express = require('express')
require('dotenv').config();
//const booksData = require('./data/book');
//const Book = require('./models/book');
//const homeRoute = require('./routes/routes')
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const booksRoutes = require('./routes/bookRoutes')
const userRoutes = require('./routes/userRoutes')
const authorRoutes = require('./routes/authorRoutes')
const cartRoutes = require('./routes/cartRoutes')
//const Cart = require('./models/cart')
const adminRoutes = require('./routes/adminRoutes')
const bodyParser = require('body-parser')
var AuthController = require('./routes/AuthRoute');
connectDB();

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); 

app.use('/api/auth', AuthController);
//app.use('/api/register', AuthController);
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/books/',booksRoutes)
app.use('/api/users',userRoutes)
app.use('/api/authors',authorRoutes)
app.use('/api/cart/',cartRoutes)
//app.use('/api/cart/insert',cartRoutes)
app.use('/api/admin/books',booksRoutes)
app.use('/api/book/insert',adminRoutes)
app.use('/api/books/update',booksRoutes)
app.use('/api/books/delete',booksRoutes)



/*
app.post('/api/cart/insert', function (req, res, next) {
  var cart = new Cart({
    books: req.body.books,
    purchasedDate: Date.now()
  })
  cart.save(function (err, cart) {
    if (err) { return next(err) }
    res.json(201, cart)
  })
})
*/
const PORT = process.env.PORT || 5000;

/*
mongoose.connect(mongo,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('database connected'))
.catch((err)=>console.log(err))
*/

//app.use('/home',homeRoute)

app.listen(PORT, () => {
  console.log(`Example app listening at http://192.168.1.112:${PORT}`)
})