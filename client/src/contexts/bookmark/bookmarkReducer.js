import { ADD_BOOKMARK, SET_CURRENT_BOOKMARK, UPDATE_BOOKMARK } from '../types'

export default (state, action) => {
    switch(action.type) {
        case ADD_BOOKMARK:
            return {
                bookmarks: [...state.bookmarks, action.payload]
            }
        
        case SET_CURRENT_BOOKMARK: 
            return {
                ...state,
                current: action.payload
            }
        case UPDATE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.noobs.map(bookmark => bookmark.id === action.payload.id ? action.payload : bookmark),
                loading: false
            }
                
        default:
            return state
    }
}