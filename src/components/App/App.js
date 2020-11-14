import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
