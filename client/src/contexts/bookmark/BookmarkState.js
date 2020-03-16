import React, { useReducer } from 'react';
import bookmarkContext from './bookmarkContext'
import bookmarkReducer from './bookmarkReducer'

import { ADD_BOOKMARK, SET_CURRENT_BOOKMARK, UPDATE_BOOKMARK } from '../types'

const BookmarkContextProvider = props => {
    const initialState = {
        bookmarks: {
            social: [
                { _id: 1, text: 'Facebook', url: 'https://facebook.com'},
                { _id: 2, text: 'Google', url: 'https://google.com'},
                { _id: 3, text: 'Youtube', url: 'https://youtube.com'},
            ],
            marketPlace: [
                { _id: 1, text: 'Facebook', url: 'https://facebook.com'},
                { _id: 2, text: 'Google', url: 'https://google.com'},
                { _id: 3, text: 'Youtube', url: 'https://youtube.com'},
            ]
        },
        current: null
    }

    const [bookmarks, dispatch] = useReducer(bookmarkReducer, initialState)

    

    const addBookmark = bookmark => {
        dispatch({ type: ADD_BOOKMARK, payload: bookmark })
    }

    const setCurrent = bookmark => {
        dispatch({type: SET_CURRENT_BOOKMARK, payload: bookmark})
    }

    const updateBookmark = bookmark => {
        dispatch({type: UPDATE_BOOKMARK, payload: bookmark})
    }

    return(
        <bookmarkContext.Provider value={{ bookmarks : bookmarks.bookmarks, addBookmark, setCurrent, current: bookmarks.current, updateBookmark }}>
            { props.children }
        </bookmarkContext.Provider>
    )
}

export default BookmarkContextProvider