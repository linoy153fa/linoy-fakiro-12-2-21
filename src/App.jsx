import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './cmps/Header';
import { Weather } from './pages/Weather.jsx';
import { Favorites } from './pages/Favorites.jsx';

export function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Switch>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route exact path='/'>
            <Weather />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
