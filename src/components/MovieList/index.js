// @flow
import React from 'react';
import withStyles from 'react-jss';
import MoviePoster from 'src/components/MoviePoster';
import type { HomeMovies_allFilms_films as AllFilms } from 'src/pages/Homepage/__generated__/HomeMovies';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
};

type Props = {
  classes: { [string]: string },
  movies: ?Array<?AllFilms>,
}

const MovieList = (props: Props) => {
  const { classes, movies } = props;
  return (
    <div className={classes.container}>
      {movies && movies.length > 0 && movies.map((movie) => {
        if (movie) {
          const { id, episodeID, title } = movie;
          return (
            <MoviePoster episodeID={episodeID} title={title} key={id} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default withStyles(styles)(MovieList);
