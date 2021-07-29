import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './admin/Login';
import Admin from './admin/Admin';
import User from './users/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/admin-login" exact component={AdminLogin} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
