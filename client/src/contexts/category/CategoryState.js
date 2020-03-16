import React, { useReducer } from 'react'
import axios from 'axios'
import CategoryContext from './categoryContext'
import categoryReducer from './categoryReducer'

import { ADD_CATEGORY, SET_CURRENT_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, CLEAER_CURRENT_CATEGORY, GET_CATEGORIES, CATEGORY_ERROR } from '../types'

const CategoryContextProvider = props => {
    const initialState = {
        categories: [],
        current: null
    }

    const [categories, dispatch] = useReducer(categoryReducer, initialState)

    const getCategories = async () => {
        const res = await axios.get('/api/categories')
        dispatch({ type: GET_CATEGORIES, payload: res.data.data })
    }

    const addCategory = async category => {
        const config = { header: {
            'Content-Type': 'application/json'
        }}
        try {
            const res = await axios.post('/api/categories', category, config)
            dispatch({ type: ADD_CATEGORY, payload: res.data.data })
        } catch (error) {
            dispatch({ type: '', payload: error.response.data.error })
        }
        
    }

    const setCurrentCategory = category => {
        dispatch({ type: SET_CURRENT_CATEGORY, payload: category })
    }

    const clearCurrentCategory = () => {
        dispatch({ type: CLEAER_CURRENT_CATEGORY })
    }

    const updateCategory = async category => {
        const config = { headers: { 'Content-Type': 'application/json' } };
      
          try {
            const res = await axios.put(
              `/api/categories/${category._id}`,
              category,
              config
            );
            console.log(res.data)
      
            dispatch({ type: UPDATE_CATEGORY,  payload: res.data.data });
          } catch (error) {
            dispatch({ type: CATEGORY_ERROR, payload: error.response.data.error })
          }
    }

    const deleteCategory = async id => {
        try {
            await axios.delete(`/api/categories/${id}`)
            dispatch({ type: DELETE_CATEGORY, payload: id })
        } catch (error) {
            dispatch({ type: CATEGORY_ERROR, payload: error.response.data.error })
        }
    }

    return(
        <CategoryContext.Provider value={{ categories, getCategories, addCategory, setCurrentCategory, current: categories.current, updateCategory, deleteCategory, clearCurrentCategory }}>
            { props.children }
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider