import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../MovieList/MovieList';

class HomePage extends Component {
  addMovie = (event) => {
    this.props.history.push('/add-movie');
  };
  render() {
    return (
      <div>
        <p>
          We need your help to compete with IMDB! Help now by adding more random
          movies!
        </p>
        <button className="addButton" onClick={this.addMovie}>
          Add a Movie NOW!
        </button>
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
