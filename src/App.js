import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchFilter from './SearchFilter'
import Title from './Title'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  updateShelf = (event) => {
    BooksAPI.update({id: event.target.id}, event.target.value).then((response) => {
       BooksAPI.getAll().then((books) => {
        this.setState({books})
      });
    });
  }


  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <div className="list-books">
               <Title/>
            <div className="list-books-content">
                <BooksList 
      				title='Currently Reading' 
      				books={books.filter((book) => book.shelf === 'currentlyReading')} 
					onUpdateShelf={this.updateShelf} 
				/>
                <BooksList 
                    title='Want to Read' 
                    books={books.filter((book) => book.shelf === 'wantToRead')} 
                    onUpdateShelf={this.updateShelf} 
                 />
                <BooksList 
                    title='Read' 
                    books={books.filter((book) => book.shelf === 'read')} 
                    onUpdateShelf={this.updateShelf} 
                  />
              
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />
        <Route path='/search' render={({history})=>(
          <SearchFilter 
          onUpdateShelf={this.updateShelf} 
     		
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp