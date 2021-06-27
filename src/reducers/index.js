import { combineReducers } from 'redux'

const moviesReducer = () => {
  return [
    {
      title: 'The Shawshank Redemption (1994)',
      runtime: '142 min',
      summary:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      title: 'The Godfather (1972)',
      runtime: '175 min',
      summary:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
    },
    {
      title: 'The Dark Knight (2008)',
      runtime: '152 min',
      summary:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    },
    {
      title: 'The Godfather: Part II (1974)',
      runtime: '202 min',
      summary:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'
    },
    {
      title: '12 Angry Men (1957)',
      runtime: '96 min',
      summary:
        'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.'
    }
  ]
}

const selectedMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload
    default:
      return selectedMovie
  }
}

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
})
