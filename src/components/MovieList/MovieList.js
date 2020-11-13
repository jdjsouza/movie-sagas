import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  componentDidMount() {
    console.log(this.props.store);
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  render() {
    return (
      <div>
        {/* structure for the Movie List goes in here */}
        {/* wire frame looks pretty basic but with the image on the left */}
        {/* then the title as an h2 on top of the description */}
        <MovieListItem />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieList);
