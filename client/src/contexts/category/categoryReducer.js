import { ADD_CATEGORY, SET_CURRENT_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, CLEAER_CURRENT_CATEGORY, GET_CATEGORIES } from '../types'
import Category from '../../components/category/AddCategory'

export default (state, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        
        case SET_CURRENT_CATEGORY: 
            return {
                ...state,
                current: action.payload
            }
        case CLEAER_CURRENT_CATEGORY:
            return {
                ...state,
                current: null
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => category._id === action.payload._id ? action.payload : category),
                loading: false
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category._id !== action.payload)
            }
                
        default:
            return state
    }
}