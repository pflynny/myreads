import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render() {

    const { books, changeShelf } = this.props
    // console.log(this.props)
    const bookItems = books.map(book => (
      <Book
        key={book.id}
        book={book}
        changeShelf={changeShelf}
      />
    ));
    // console.log(bookItems)

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">

          <ol className="books-grid">
            {bookItems}
            {/* {books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={changeShelf}
                />
              </li>
            ))} */}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
