const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const categories = require('./routes/categories')
const bookmarks = require('./routes/bookmarks')
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())


app.use('/api/categories', categories)
app.use('/api/bookmarks', bookmarks)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))