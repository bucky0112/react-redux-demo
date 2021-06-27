import React from 'react'
import MovieList from './components/MovieList'
import MovieInfo from './components/MovieInfo'
import { Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <MovieList />
        </Grid.Column>
        <Grid.Column width={8}>
          <MovieInfo />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default App
