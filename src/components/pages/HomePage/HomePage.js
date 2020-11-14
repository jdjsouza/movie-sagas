import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../MovieList/MovieList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <br></br>
        {/* Need to display all movies with the movie poster */}
        {/* The movie poster is the button to load the details page */}
        {/* May make the entire div a button to load the details page */}
        <MovieList />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(HomePage);
