import React from 'react'
import BooksList from './BooksList'
import Book from './Book'
import SearchFilter from './SearchFilter'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
   books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
    this.setState({books})
console.log(books);
  })
  }

  render() {

    return (     
      <div className="app">
   		 <Route exact path="/" render={() =>  (
        <BooksList books={this.state.books}
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
