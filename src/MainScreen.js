import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainScreen extends React.Component {

    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                < BookShelf bookShelfTitle= 'Wanna log out?' / >
                < BookShelf bookShelfTitle= "Want to Read" / >
                <BookShelf bookShelfTitle="Read" / >
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default MainScreen








