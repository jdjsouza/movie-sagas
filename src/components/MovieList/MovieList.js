import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  //   componentDidMount() {
  //     console.log(this.props.store);
  //     this.props.dispatch({
  //       type: 'GET_MOVIES',
  //     });
  //   }
  render() {
    return (
      <div>
        {this.props.store.movies.map((item, index) => (
          <MovieListItem key={index} movie={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieList);
