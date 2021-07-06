import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FavoriteCocktials from './FavoriteCocktials';
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
