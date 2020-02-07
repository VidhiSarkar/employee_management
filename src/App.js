import React from 'react';
import Header from './components/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Employees from './containers/Employees';
import AddEmployee from './containers/Employees/AddEmployee';
const routes = (
    <Switch>
        <Route path="/addEmployee" exact component={AddEmployee} />
        <Route path="/" exact component={Employees} />
        <Redirect to="/" />
    </Switch>
);

function App() {
  return (
      <Header>
        {routes}
      </Header>
  );
}

export default withRouter(App);

