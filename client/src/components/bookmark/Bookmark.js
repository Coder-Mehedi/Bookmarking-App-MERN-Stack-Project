import React from 'react'

const Bookmark = ({ bookmark }) => (
        <li className="collection-item">
            <div>{bookmark.text}
                <a href="#!" className="secondary-content">
                    <i className="material-icons yellow-text">edit</i>
                    <i className="material-icons red-text">delete</i>
                </a>
            </div>
        </li>
)


export default Bookmark
