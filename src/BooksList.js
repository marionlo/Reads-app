import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

BooksList.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array
}

function BooksList({title, books, onUpdateShelf}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BooksList