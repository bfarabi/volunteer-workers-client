import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import AddEvent from './Component/AddEvent/AddEvent';
import Event from './Component/Event/Event';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addEvent">Add Event</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

    
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/addEvent">
          <AddEvent></AddEvent>
        </Route>
        <Route path="/event">
          <Event></Event>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
