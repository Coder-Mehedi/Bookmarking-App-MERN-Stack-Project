import React, { useContext } from 'react'
import CategoryContext from '../../contexts/category/categoryContext'
import BookmarkList from '../bookmark/BookmarkList'

const Category = ({ category }) => {
    const { setCurrentCategory, deleteCategory } = useContext(CategoryContext)

    return (
        <div>
            <div className="col s12 m4">
            <div className="card grey darken-1">
                <div className="card-content">
                
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4>{ category.text }
                            <i className="material-icons red-text right" onClick={() => deleteCategory( category._id )}>delete</i>
                            <i data-target="modal1"  className="material-icons yellow-text right modal-trigger" onClick={() => setCurrentCategory(category)}>edit</i>
                        </h4>
                    </li>
                    <BookmarkList />
                    
                   
                </ul>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Category
