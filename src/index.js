// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'src/graphql';
import { ApolloProvider } from 'react-apollo';

const root = document.getElementById('app');
const Homepage = loadable(() => import('src/pages/Homepage'));


const App = (
  <ApolloProvider client={ApolloClient}>
    <Router>
      <Route exact path="/" component={Homepage} />
    </Router>
  </ApolloProvider>
);

if (root !== null) {
  ReactDOM.render(App, root);
}
