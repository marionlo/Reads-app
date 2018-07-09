import React from 'react'
import BooksList from './BooksList'
import SearchFilter from './SearchFilter'
import { Route, Link } from 'react-router-dom'
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

changeShelf = (event) => {
    BooksAPI.update({id: event.target.id}, event.target.value).then((response) => {
       BooksAPI.getAll().then((books) => {
        this.setState({Books: books})
      });
    });
  }

  render() {

    return (     
      <div className="app">
   		 <Route exact path="/" render={() =>  (
                        <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BooksList
                                    title="Currently Reading"
                                   books={this.state.books}
                                    changeShelf={this.changeShelf}
                                />
                                <BooksList
                                    title="Want to Read"
                                  
                                    changeShelf={this.changeShelf}
                                />
                                <BooksList
                                    title="Read"
                                   
                                    changeShelf={this.changeShelf}
                                />
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
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
