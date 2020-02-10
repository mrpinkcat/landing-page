import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './assets/styles/index.css';

import Header from './components/header/Header';

import Home from './routes/Home';

function App() {
  return (
    <div className="panel-front-app">
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
