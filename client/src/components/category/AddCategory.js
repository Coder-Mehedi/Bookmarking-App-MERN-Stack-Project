import React, { useContext, useState, useEffect } from 'react'
import CategoryContext from '../../contexts/category/categoryContext'
import M from "materialize-css/dist/js/materialize.min.js";

const AddCategory = () => {
    const { current, clearCurrentCategory, addCategory, updateCategory, categories: { categories} } = useContext(CategoryContext)
    const [categoryName, setCategoryName] = useState('')
    useEffect(() => {
        if(current !== null) {
            setCategoryName(current.text)
        } else {
            setCategoryName('')
        }
    }, [current])



    const handleSubmit = e => {
        e.preventDefault()
        if(current === null) {
            addCategory({ text: categoryName })
            M.toast({ html: `${categoryName} Category Added` });
            setCategoryName('')
            
        } else {
            updateCategory({ _id: current._id, text: categoryName })
            M.toast({ html: `Category Updated As: ${categoryName}` });
            clearCurrentCategory()
            setCategoryName('')
        }
    }

    return (
        <div className="center">

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>{current ? 'Update' : 'Add'} Bookmark Category</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Category Name" onChange={ e => setCategoryName(e.target.value) } value={categoryName}/>
                    <div className="modal-footer">
                        <button href="#!" className="white-text modal-close waves-effect waves-green btn-flat black lighten-2">Close </button>
                        <input type="submit" href="#!" value={current ? 'Update' : 'Add'} className="waves-effect waves-green btn-flat pink lighten-2 modal-close" />
                    </div>
                    </form>
                </div>
                
            </div>

            <a data-target="modal1" className="btn-floating btn-large waves-effect waves-light red  modal-trigger add-book-btn"><i className="material-icons">add</i></a>
        </div>
    )
}

export default AddCategory
