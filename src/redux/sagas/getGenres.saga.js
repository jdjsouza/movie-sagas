import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getGenres(action) {
  try {
    const response = yield axios.get('/api/genre');
    console.log(response.data);
    yield put({
      type: 'ADD_GENRE',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getGenresSaga() {
  yield takeLatest('GET_GENRE', getGenres);
}

export default getGenresSaga;
