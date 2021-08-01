import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';
import {RMA} from './RMA';
function App() {
  return (
  <>
  <Router>
  <NaviBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
        <Route path="/RMA" component={RMA} />
    </Switch>
    </Router>
  </>  
  );
}

export default App;
