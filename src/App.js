import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './users/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
