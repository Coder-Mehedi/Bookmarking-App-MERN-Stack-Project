const express = require('express')
const router = express.Router()

const { getCategories, addCategories, updateCategory, deleteCategory } = require('../controllers/categories')

router
    .route('/')
    .get(getCategories)
    .post(addCategories)

router
    .route('/:id')
    .put(updateCategory)
    .delete(deleteCategory)

module.exports = router