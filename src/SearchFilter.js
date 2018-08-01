import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import Book from './Book'

class SearchFilter extends Component {
  
state = {
  	query: '',
	 searchedBooks: [],
}

updateQuery = (query) => {
  this.setState({
    query: query
  })
  this.updateSearchedBooks(query);
}

updateSearchedBooks = (query) => {
  var vm = this;
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          for (var i = 0; i <vm.props.books.length; i++) 
          {for (var j=0; j< searchedBooks.length; j++) {
            if (vm.props.books[i].id === 	searchedBooks[j].id) {
                searchedBooks[j].shelf = vm.props.books[i].shelf
         	 }
          }
        }
          this.setState({ searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {

    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {
      }
                <input type="text" 
      				placeholder="Search by title or author"
      				value={this.state.query}
      				onChange={(event) => this.updateQuery(event.target.value)}
      				/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {this.state.searchedBooks.map(searchedBooks => (
                  <li key={searchedBooks.id} >
					<Book 
						book={searchedBooks}
						onUpdateShelf={this.props.onUpdateShelf}
						books={this.props.books}
						/>
					</li>
                 ))
                }

			</ol>
            </div>
          </div>
  )
  }

}


export default SearchFilter
