import { MOVIE_SELECTED } from '../action/index';

const STATE_INIT = {
  movieSelected: {},
  categorySelected: {},

};

function movieReducer(state = STATE_INIT, action) {
  switch (action.type) {
    case MOVIE_SELECTED: {
      return {
        ...state,
        movieSelected: action.movie,
        categorySelected: action.category,

      }
    }
    default:
      return state;
  }
}

export default movieReducer;
