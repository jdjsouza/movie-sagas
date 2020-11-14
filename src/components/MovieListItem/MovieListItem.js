import React, { Component } from 'react';
import { connect } from 'react-redux';
// To get the details page to work, we need withRouter so we can send the ID back
import { withRouter } from 'react-router-dom';

class MovieListItem extends Component {
  render() {
    return (
      <div className="movieContainer">
        {/* go away */}
        <div>
          <img src={this.props.movie.poster} alt={this.props.movie.title} />
        </div>
        <div>
          <h3>{this.props.movie.title}</h3>
        </div>
        <div>
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

export default connect(mapStateToProps)(MovieListItem);
