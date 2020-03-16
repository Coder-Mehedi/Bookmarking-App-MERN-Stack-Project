const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
    text: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookmarkCategories'
    },

    bookmark_text: {
        type: String,
        required: [true, 'Categories name is required']
    },
    bookmark_url: {
        type: String,
        required: [true, 'Enter a valid URL']
    }
})

module.exports = mongoose.model('bookmark', BookmarkSchema)