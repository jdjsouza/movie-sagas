import React, { Component } from 'react';
import Details from '../../Details/Details';

class DetailsPage extends Component {
  render() {
    return (
      <div>
        {/* Shows all the details for a specific movie including what genre's it's been given */}
        {/* Back to list button */}
        <h1>Details Page!!</h1>
        <Details />
      </div>
    );
  }
}

export default DetailsPage;
