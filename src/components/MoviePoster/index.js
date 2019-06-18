// @flow
import React from 'react';
import withStyles from 'react-jss';

type Props = {
  classes: { [string]: string },
  episodeID: number,
  title: string,
};

const styles = {
  posterContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    padding: 10,
    // margin: 'auto',
  },
  poster: {
    width: 200,
  },
};

const MoviePoster = (props: Props) => {
  const { classes, episodeID, title } = props;
  const posterTitle = `Episode ${episodeID}: ${title}`;
  return (
    <div className={classes.posterContainer}>
      <img src={`images/${episodeID}.jpg`} className={classes.poster} alt={posterTitle} />
      <p>{posterTitle}</p>
    </div>
  );
};

export default withStyles(styles)(MoviePoster);
