import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import FavoriteCocktials from './components/FavoriteCocktials';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/favoriteCocktails'>
              <FavoriteCocktials />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
