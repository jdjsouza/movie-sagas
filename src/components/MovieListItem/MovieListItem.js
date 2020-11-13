import React, { Component } from 'react';
import { connect } from 'react-redux';
// To get the details page to work, we need withRouter so we can send the ID back
import { withRouter } from 'react-router-dom';

class MovieListItem extends Component {
  render() {
    return (
      <div className="movieContainer">
        <h3>Where are the movies?!</h3>
        {/* // br */}
        <h3>I bet Josh lost them!!</h3>
        {/* // br */}
        <h3>Damnit Josh!!!</h3>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieListItem);
