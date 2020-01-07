import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import LoginView from './components/login';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <LoginView />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
