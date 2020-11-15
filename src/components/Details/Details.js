import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    // get the details for this movie ID
    this.props.dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.store.movieDetails.poster}
            alt={this.props.store.movieDetails.title}
          />
        </div>
        <div>
          <h2>{this.props.store.movieDetails.title}</h2>
          <p>
            Genres:{' '}
            {this.props.store.movieDetails.genres.map((item, index) => (
              <span key={index}>{item}, </span>
            ))}
          </p>
          <p className="descriptionParagraph">
            {this.props.store.movieDetails.description}
          </p>
        </div>
        {/* // br */}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStateToProps)(Details));
