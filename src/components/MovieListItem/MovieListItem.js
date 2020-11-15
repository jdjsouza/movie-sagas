import React, { Component } from 'react';
import { connect } from 'react-redux';
// To get the details page to work, we need withRouter so we can send the ID back
import { withRouter } from 'react-router-dom';
// gotta make it look good
import './MovieListItem.css';

class MovieListItem extends Component {
  goToDetails = (event) => {
    this.props.history.push(`/details/${this.props.movie.id}`);
  };

  render() {
    return (
      <div className="movieContainer">
        {/* overall container for each item */}
        <div onClick={this.goToDetails} className="moviePoster">
          <img
            className="poster"
            src={this.props.movie.poster}
            alt={this.props.movie.title}
          />
        </div>
        <div className="movieInfo">
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.description}</p>
        </div>
        {/* // br */}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStateToProps)(MovieListItem));
