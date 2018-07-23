import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import MainScreen from './MainScreen'
// import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search />
        )}/>
        <Route exact path="/" render={() => (
          <MainScreen />
        )}/>
      </div>
    )
  }
}

export default BooksApp
