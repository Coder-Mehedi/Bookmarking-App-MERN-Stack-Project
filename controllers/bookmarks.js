const Categories = require('../models/Bookmark')

exports.getBookmarks = async (req, res, next) => {
    try {
        const categories = await Categories.find()
        return res.status(200).json({ success: true, data: categories })
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error'})
    }
}

exports.addBookmark = async (req, res, next) => {
    try {
        const categories = await Categories.create(req.body)

        return res.status(201).json({ success: true, data: categories })

    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)
            return res.status(400).json({ success: false, error: messages})
        } else {
            res.status(500).json({ success: false, error: 'Server Error'})
        }
    }
}

exports.updateBookmark = async (req, res, next) => {
    const { text } = req.body
    let category = await Categories.findById(req.params.id)
        
    if(!category) return res.status(400).json({ success: false, error: 'Something is wrong, category id invalid'})
    
    try {
        const updatedcategory = await Categories.findByIdAndUpdate(req.params.id, {$set: {text }}, { new: true })

        return res.json({ success: true, data: updatedcategory })
        

    } catch (error) {
        res.status(500).json({ success: false, error: 'Not Updated'})
    }
}

exports.deleteBookmark = async (req, res, next) => {
    try {
        const categories = Categories.findById(req.params.id)

        if(!categories) {
            return res.status(400).json({ success: false, error: 'No Such Categories Found'})
        }

        await categories.deleteOne()
        res.status(200).json({ success: true, data: {}})

    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error'})
    }
}