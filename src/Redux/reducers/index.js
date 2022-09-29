import { combineReducers } from 'redux';
import movie from './movieReducer';
import name from './reducerName'

const rootReducer = combineReducers({
  movieReducer: movie,
  reducerName: name
});

export default rootReducer;