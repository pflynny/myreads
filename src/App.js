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

  componentDidMount() {
    // console.log('I was triggered during componentDidMount')
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
      }))
      // console.log(books[1].title)
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
          <MainScreen books={books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp