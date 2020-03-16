const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Categories name is required']
    }
})

module.exports = mongoose.model('BookmarkCategories', CategoriesSchema)