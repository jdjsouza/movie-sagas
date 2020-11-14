import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// START GET movies for HomePage
function* getMovies(action) {
  try {
    const response = yield axios.get('/api/movie');
    console.log(response.data);
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getMoviesSaga() {
  yield takeLatest('GET_MOVIES', getMovies);
}

export default getMoviesSaga;
// END GET movies for HomePage
