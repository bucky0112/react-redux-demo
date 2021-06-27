import React from 'react'
import { connect } from 'react-redux'
import { List, Button, Grid } from 'semantic-ui-react'
import { selectMovie } from '../actions'

const MovieList = (props) => {
  // console.log(props)

  const renderList = () => {
    return props.movies.map((movie) => {
      return (
        <List.Item key={movie.title}>
          <Grid container>
            <Grid.Column floated='left' width={5}>
              <List.Content>{movie.title}</List.Content>
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Button primary onClick={() => props.selectMovie(movie)}>
                Pick
              </Button>
            </Grid.Column>
          </Grid>
        </List.Item>
      )
    })
  }
  return (
    <List divided relaxed>
      {renderList()}
    </List>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { selectMovie })(MovieList)
