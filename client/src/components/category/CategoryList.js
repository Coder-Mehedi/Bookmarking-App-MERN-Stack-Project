import React, { useContext, useEffect } from 'react'
import CategoryContext from '../../contexts/category/categoryContext'
import Category from './Category'

const CategoryList = () => {
    const categoryContext = useContext(CategoryContext)
    const {getCategories, categories : { categories }} = categoryContext
    
    useEffect(() => {
        getCategories()
        //eslint-disable-next-line
    }, [])

    return (
        <div className="row">
            {categories.length > 0 ? categories.map( category => (
                <Category key={ category._id } category={ category  } />
            )) : (
                <h1 className="center green-text">No Categories here... Add Some </h1>
            )}
        </div>
    )
}

export default CategoryList
