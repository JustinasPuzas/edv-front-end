import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { NavigationBar, Footer } from './components';
import { CSSReset, Flex} from "@chakra-ui/core";
import {ThemeProvider as Theme} from '@chakra-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router} from 'react-router-dom';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';
import { config } from './config';

import theme from './theme'

const link = createHttpLink({
  uri: `${config.BACK_END_URL}/graphql`,
  credentials: 'include'
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Theme>
        <CSSReset />
          <Router>
            <ApolloProvider client={client}>
              
                <NavigationBar />  
                <Flex  minHeight='96vh' direction='column'>
                  <App />
                </Flex>
                <Footer />
            </ApolloProvider>
          </Router>
      </Theme>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
