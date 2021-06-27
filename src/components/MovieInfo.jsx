import React from 'react'
import { connect } from 'react-redux'

const MovieInfo = ({ movie }) => {
  // console.log(movie)
  if (!movie) {
    return <h2>Pick a Movie</h2>
  }
  return (
    <div>
      <h2>Movie Info:</h2>
      <h3>{movie.title}</h3>
      <span>{movie.runtime}</span>
      <p>
        {movie.summary}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps, { MovieInfo })(MovieInfo)
