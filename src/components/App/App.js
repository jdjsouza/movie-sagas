import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import AddMoviePage from '../pages/AddMoviePage/AddMoviePage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
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
        <Router>
          <Header />
          {/* ADD PAGES! */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/add-movie" component={AddMoviePage} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
