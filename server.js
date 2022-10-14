// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// CONFIGURATION/MIDDLEWARE:
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// MONGOOSE:
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => { 
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})


// ROUTES:
// Root Index:
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

// Books:
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)


// LISTEN:
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT)
})