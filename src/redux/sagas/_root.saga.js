import { all } from 'redux-saga/effects';
import getGenresSaga from './getGenres.saga';
import getMovieDetailsSaga from './getMovieDetails.saga';
import getMoviesSaga from './getMovies.saga';
import addMoviesSaga from './addMovies.saga';

// SAGAS
// import getPlantsSaga from './getPlants.saga';
// import postPlantsSaga from './postPlants.saga';
// import deletePlantsSaga from './deletePlants.saga';

function* rootSaga() {
  yield all([
    // get sagas
    getMoviesSaga(),
    getGenresSaga(),
    getMovieDetailsSaga(),
    addMoviesSaga(),
  ]);
}

export default rootSaga;

// inside rootSaga
//   // register all sagas
//   yield all([
//     //<br>
//     getPlantsSaga(),
//     postPlantsSaga(),
//     deletePlantsSaga(),
//   ]);
