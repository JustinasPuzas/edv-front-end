import _ from './env';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { NavigationBar, Footer } from './components';
import { ThemeProvider, CSSReset, Flex} from "@chakra-ui/core";
import {newTheme} from './assets/theme'
import { BrowserRouter as Router} from 'react-router-dom';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';
import { config } from './config';
console.log(`Index.js`)
console.log(process.env)

const link = createHttpLink({
  uri: `${config.BACK_END_URL}/graphql`,
  credentials: 'include'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <CSSReset />
        <Router>
          <ApolloProvider client={client}>
            <NavigationBar />          
              <Flex bg='blacks.700'  minHeight='96vh' direction='column'>
                <App />
              </Flex>
              <Footer />
          </ApolloProvider>
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
