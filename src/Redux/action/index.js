export const MOVIE_SELECTED = 'MOVIE_SELECTED';

const selectMovie = (category, movie, name) => ({
  type: MOVIE_SELECTED,

  category,
  movie,
  name,

});

export default selectMovie;