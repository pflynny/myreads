import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import MainScreen from './MainScreen'
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {

	state = {
	  books: []
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    // console.log(book)
    // console.log(shelf)
    book.shelf = shelf

    this.setState(prevState => ({
      books: prevState.books.filter(b => b !== book).concat(book)
    }));
    console.log(book.shelf)
  };

  componentDidMount() {
    // console.log('I was triggered during componentDidMount')
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
      }))
      // console.log(books)
    })
  }


  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search />
        )}/>
        <Route exact path="/" render={() => (
          <MainScreen
            books={books}
            changeShelf = {this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp