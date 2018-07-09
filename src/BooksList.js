import React, { Component } from 'react';

import PropTypes from 'prop-types';

class BooksList extends Component {
  state = {};

  static propTypes = {
    title: PropTypes.string.isRequired,
   
  }
  
    render() {
      const {title} = this.props
    return (
           
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
               
                    </ol>
                  </div>
                </div>
              
          
  )
  }
}


export default BooksList