import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList = () => {
    return this.props.books.map((book) => {
      return (
        <li 
        key={book.title} 
        onClick={()=> this.props.selectBook()}
        className='list-group-item'>
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
    }
  }

  function mapStateToProps(state) {
    return {
      books: state.books,
    };
  }
  // Anything returned from this function will end up as props on the BookList container
  function mapDispatchTpProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
  }
// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, SelectBook. Make available as prop.
export default connect(mapStateToProps, mapDispatchTpProps)(BookList);