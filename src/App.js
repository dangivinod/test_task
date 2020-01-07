import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginView from './components/login';
import EmployeeList from './components/employee/list'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>

          <Route path="/employee_list" >
            <EmployeeList />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
