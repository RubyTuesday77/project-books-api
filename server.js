// DEPENDENCIES/CONFIGURATION:
const express = require('express')
const app = express()
app.use(express.json())




// ROUTES:
// Root Index:
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

// Books:



// LISTEN:
app.listen(3000)
