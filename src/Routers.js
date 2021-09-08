import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Main.css';
import Login from './Login';
import SignUp from './SignUp';
import Table from './Table';
//   import LineChart from './LineChart';	

export default function Routers() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">
              <a class="active" href="#home">
                Login
              </a>
            </Link>
          </li>

          <li>
            <Link to="/signUp">
              <a href="#signUp">
                Register
              </a>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <a href="#dashboard">
                Dashboard
              </a>
            </Link>
          </li>
        </ul>



        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}