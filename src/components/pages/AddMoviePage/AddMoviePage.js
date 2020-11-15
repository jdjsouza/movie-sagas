import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genres: '',
    },
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [propertyName]: event.target.value,
      },
    });
  };

  addMovie = (event) => {
    console.log('We gonna add movies!');
  };

  cancelClick = (event) => {
    this.props.history.push('/');
  };

  render() {
    const theGenres = this.props.store.genres.map(function (item) {
      return <option key={item.id}>{item.name}</option>;
    });
    console.log(this.props.store);
    return (
      <div>
        <h2>Let's add a Movie!</h2>
        <div className="inputContainer">
          {/* Input field for title */}
          <input
            className="inputTitle"
            required
            type="text"
            placeholder="Movie Title"
            value={this.state.newMovie.title}
            onChange={this.handleChangeFor('title')}
          ></input>
          {/* Input Field for movie poster URL */}
          <input
            className="inputLink"
            required
            type="text"
            placeholder="Movie Poster link"
            value={this.state.newMovie.poster}
            onChange={this.handleChangeFor('poster')}
          ></input>
          {/* A dropdown box for genres */}
          <label> Select a Genre: </label>
          <select name="genres">
            <option value="0">Genre</option>
            {theGenres}
          </select>
          {/* A text area for the movie description */}
          <textarea
            className="descText"
            required
            rows="5"
            cols="75"
            placeholder="Full Movie Description"
            value={this.state.newMovie.poster}
            onChange={this.handleChangeFor('poster')}
          ></textarea>
          {/* Save and Cancel buttons */}
        </div>
        <button className="cancelButton" onClick={this.cancelClick}>
          Cancel
        </button>
        <button className="saveButton" onClick={this.addMovie}>
          Add Movie!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(AddMoviePage);
