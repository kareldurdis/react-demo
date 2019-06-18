// @flow
import React from 'react';
import Query from 'react-apollo/Query';
import gql from 'graphql-tag';
import MovieList from 'src/components/MovieList';
import type { ApolloError } from 'apollo-client';
import type { HomeMovies } from './__generated__/HomeMovies';

const query = gql`
  query HomeMovies {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
      }
    }
  }
`;


type HomeMoviesQuery = {
  loading: boolean,
  error: ApolloError,
  data: HomeMovies,
}

const Homepage = () => (
  <Query query={query}>
    {(homeMovieProps: HomeMoviesQuery) => {
      const { loading, error, data } = homeMovieProps;

      if (loading) return <p>Loading...</p>;
      if (error) {
        return (
          <p>{`Error - ${error.message}. Is the GraphQL server running?`}</p>
        );
      }

      if (data && data.allFilms && data.allFilms.films) {
        return (
          <MovieList movies={data.allFilms.films} />
        );
      }
      return null;
    }}
  </Query>
);

export default Homepage;
