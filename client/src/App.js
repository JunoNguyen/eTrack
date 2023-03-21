import React , { useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import BasePage from './pages/BasePage';
import ScheduleView from './pages/ScheduleView';

import MessageForm from './components/MessageForm';
import ScheduledHours from './components/ScheduledHours';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Employee: {
        fields: {
          savedNotes: {
            merge(existing, incoming) {
              return incoming;
            }
          }
        },
      },
    }
  })
});

function App() {
  useEffect(() => {
    document.title = "eTrack"
 }, []);
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh w-100">
            <Header />
            <div className="d-flex justify-content-center m-3">
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/'>
                <BasePage />
              </Route>
              <Route exact path='/all-schedules'>
                <ScheduleView />
              </Route>
              <Route exact path='/message'>
                <MessageForm />
              </Route>
              <Route exact path='/hours'>
                <ScheduledHours />
              </Route>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
