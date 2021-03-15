require('dotenv').config();
const booksData = require('./data/book');
const coonectDB = require('./config/db')
const Book = require('./models/book');
const User = require('./models/user')
const usersData = require('./data/users')
const Author = require('./models/author')
const authorData = require('./data/author')
const Cart = require('./models/cart')
const cartData = require('./data/cart')

coonectDB();

const importData = async () => {
    try {

        await Book.deleteMany({});
        await Book.insertMany(booksData)
        console.log("data import success ")

      //  process.exit()
    } catch (err) {
        console.log(err)
       // process.exit(1)
    }
}


const importDataUsers = async () => {
  try {

      await User.deleteMany({});
      await User.insertMany(usersData)
      console.log("data import success ")

    //  process.exit()
  } catch (err) {
      console.log(err)
     // process.exit(1)
  }
}

const importDataAuthors = async () => {
  try {

      await Author.deleteMany({});
      await Author.insertMany(authorData)
      console.log("data import success ")

    //  process.exit()
  } catch (err) {
      console.log(err)
     // process.exit(1)
  }
}

const importCartData = async () => {
  try {

      await Cart.deleteMany({});
      await Cart.insertMany(cartData)
      console.log("data import success ")

    //  process.exit()
  } catch (err) {
      console.log(err)
     // process.exit(1)
  }
}



importData();
importDataUsers();
importDataAuthors();
importCartData();