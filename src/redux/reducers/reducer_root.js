import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';

const reducers = combineReducers({
  //reducers get combined here
  movies,
  genres,
});

export default reducers;
