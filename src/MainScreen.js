import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainScreen extends React.Component {

    render() {

        const { books } = this.props

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={books} bookShelfTitle= 'Reading' / >
                {/* <BookShelf bookShelfTitle= "Want to Read" / >
                <BookShelf bookShelfTitle="Read" / > */}
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