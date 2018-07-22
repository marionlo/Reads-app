import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import Book from './Book'

class SearchFilter extends Component {
  
state = {
  	query: '',
	 searchedBooks: []
}

updateQuery = (query) => {
  this.setState({
    query: query
  })
  this.updateSearchedBooks(query);
}

updateSearchedBooks = () => {
  if (this.state.query) {
  BooksAPI.search(this.state.query).then((searchedBooks) => {
    if (searchedBooks.error) {
      this.setState({searchedBooks: []});
    } else { 
      this.setState({searchedBooks})
    }
  })
  }
  else { 
    this.setState({searchedBooks: []})
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