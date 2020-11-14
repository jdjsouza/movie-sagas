import React, { Component } from 'react';
import Details from '../../Details/Details';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  clickBack = (event) => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        {/* Shows all the details for a specific movie including what genre's it's been given */}
        {/* Back to list button */}
        <h1>Movie Details</h1>
        <Details />
        <button className="backButton" onClick={this.clickBack}>
          Back To The List!
        </button>
      </div>
    );
  }
}

export default connect()(DetailsPage);
