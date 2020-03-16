import React, { useContext, useEffect } from 'react'
import BookmarkContext from '../../contexts/bookmark/bookmarkContext'
import Bookmark from './Bookmark'

const BookmarkList = () => {
    const bookmarkContext = useContext(BookmarkContext)
    const { bookmarks } = bookmarkContext
    console.log(bookmarks);
    
    return (
        <div>
            {bookmarks.social.map( bookmark => (
                <Bookmark key={ bookmark._id } bookmark={ bookmark  } />
            ))}
        </div>
    )
}

export default BookmarkList
