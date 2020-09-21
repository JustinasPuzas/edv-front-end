import _ from './env';
import React from 'react';
import './App.css';
import { Switch, Route, Router} from 'react-router-dom';
import { DashboardPage, LandingPage, MenuPage, ShopPage} from './pages';

console.log(`App.js`)
console.log(process.env)

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={ LandingPage } />
      <Route path='/dashboard/:id' exact={true} component={ DashboardPage } />
      <Route path='/menu' exact={true} component={ MenuPage } />
      <Route path='/shop' exact={true} component={ ShopPage } />
    </Switch>
  );
}

export default App;
