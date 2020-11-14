import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// START GET for details for Details component to display on DetailsPage
function* getMovieDetails(action) {
  try {
    const response = yield axios.get(`/api/movie/details/${action.payload}`);
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getMovieDetailsSaga() {
  yield takeLatest('GET_MOVIE_DETAILS', getMovieDetails);
}

export default getMovieDetailsSaga;
// END GET for details for Details component to display on DetailsPage

// I guess it's cleaner to have a different file for each saga
// but I really wanted to group all the movie stuff together.
// Maybe with a different type of export?
