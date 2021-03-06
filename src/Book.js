import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object,
    onUpdateShelf: PropTypes.func,
  }

  render () {
    const { book, onUpdateShelf } = this.props;
    const showThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
      
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showThumbnail}"`}}></div>
            <div className="book-shelf-changer">
              <select id={book.id} value={book.shelf} onChange={onUpdateShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" selected="true">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
         
        </div>
      
    )
  }
}

export default Book
