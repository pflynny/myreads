import React from 'react'
import BookSwitcher from './BookSwitcher'

class Book extends React.Component {
  render() {

    const { book, changeShelf } = this.props
    console.log(book.id)

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className = "book-cover"
            style = {
              {
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }
            } > </div>
            <div className="book-shelf-changer">
              <BookSwitcher shelf={book.shelf} changeShelf={shelf => changeShelf(book, shelf)} />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && (
              <div className="book-authors">
                {book.authors.map(author => (
                  <span key={author}>{author}</span>
                ))}
              </div>
            )
          }
        </div>
      </li>
    )
  }
}

export default Book