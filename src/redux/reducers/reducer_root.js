import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';
import movieDetails from './movieDetails';

const reducers = combineReducers({
  //reducers get combined here
  movies,
  movieDetails,
  genres,
});

export default reducers;
