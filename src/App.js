import React from 'react'
import BooksList from './BooksList'
import SearchFilter from './SearchFilter'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }

  render() {
    return (     
      <div className="app">
       
   		 <Route exact path="/" render={() =>  (
        <BooksList
        />
      )}/>

      <Route path="/search" render={({ history }) => (
        <SearchFilter
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp