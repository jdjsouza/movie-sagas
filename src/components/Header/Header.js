import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to the Random List of Movies Page</h1>
        {/* it needed to feel a bit more human */}
        <p className="App-intro">The coolest lil movie site eva!!</p>
        <p className="App-intro">{`(Just nod and smile... please?)`}</p>
      </header>
    );
  }
}

export default Header;
