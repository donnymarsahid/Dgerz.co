import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './admin/Login';
import Admin from './admin/Admin';
import User from './users/User';
import AddCategory from './admin/category/AddCategory';
import DetailCategory from './admin/category/DetailCategory';
import EditCategory from './admin/category/EditCategory';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/admin-login" exact component={AdminLogin} />
          <Route path="/admin" exact component={Admin} />
          {/* Category */}
          <Route path="/addCategory" exact component={AddCategory} />
          <Route path="/detailCategory" exact component={DetailCategory} />
          <Route path="/editCategory/:id" exact component={EditCategory} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
