import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';


class BookDetail extends Component {
  render() {
    return (
      <div>here</div>
    )
  };
}
function mapStateToProps(state) {
  return {
    book: sate.activeBook,
  }
}
export default connect(mapStateToProps)(BookDetail)