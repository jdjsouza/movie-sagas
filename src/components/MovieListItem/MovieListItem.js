import React, { Component } from 'react';
import { connect } from 'react-redux';
// To get the details page to work, we need withRouter so we can send the ID back
import { withRouter } from 'react-router-dom';

class MovieListItem extends Component {
  render() {
    return (
      <div>
        <h1>Where are the movies?!</h1>
        {/* // br */}
        <h1>I bet Kyle lost them!!</h1>
        {/* // br */}
        <h1>Damnit Kyle!!!</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieListItem);
