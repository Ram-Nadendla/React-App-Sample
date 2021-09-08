import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Main.css';
//import Login from './Login';
import TodoList  from "./TodoList";
    import SignUp from './SignUp';
    import Table from './Table';
    import LineChart from './LineChart';	
 
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
  <Link to="/news">
      <a href="#news">
          Register
          </a>
          </Link>
          </li>
          <li>
  <Link to="/table">
      <a href="#table">
      Dashboard
          </a>
          </Link>
          </li>
          <li>
  <Link to="/chart">
      <a href="#chart">
      Chart
          </a>
          </Link>
          </li>
</ul>
  
  
          
          <Switch>
            <Route exact path="/">
             <TodoList/>
            </Route>
            <Route path="/news">
              <SignUp />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/chart">
              <LineChart />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }