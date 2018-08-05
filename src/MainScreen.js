import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainScreen extends React.Component {

    render() {


        // console.log(this.props);
        const { books, changeShelf } = this.props

        const bookShelf = books.reduce(function (list, item) {
          // console.log(item)
          list[item.shelf] = list[item.shelf] || []
          list[item.shelf].push(item)
          // console.log(list)
          return list
        }, [])

        const currentlyReading = bookShelf['currentlyReading']
        const wantToRead = bookShelf['wantToRead']
        const read = bookShelf['read']
        // console.log(bookShelf)

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {currentlyReading &&
                  <BookShelf books={currentlyReading} bookShelfTitle="Currently Reading"  changeShelf={changeShelf} />
                }
                {wantToRead &&
                  <BookShelf books={wantToRead} changeShelf={changeShelf} bookShelfTitle= "Want to Read" />
                }
                {read &&
                  <BookShelf books={read} changeShelf={changeShelf} bookShelfTitle="Read" />
                }
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