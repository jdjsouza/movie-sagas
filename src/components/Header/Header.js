import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  addMovie = (event) => {
    this.props.history.push('/addmovie');
  };
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to the Random List of Movies Page</h1>
        <p className="App-intro">We need your help to compete with IMDB!</p>
        <p className="App-intro">Help now by adding more random movies!</p>
        <button onClick={this.addMovie}>Add a Movie NOW!</button>
      </header>
    );
  }
}

export default connect()(Header);
