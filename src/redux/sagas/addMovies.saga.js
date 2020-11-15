import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addMovies(action) {
  try {
    yield axios.post(`/api/movie`, action.payload);
    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}

function* addMoviesSaga() {
  yield takeLatest('ADD_MOVIES', addMovies);
}

export default addMoviesSaga;
