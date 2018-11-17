
import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Locations } from './Location';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="container">
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/Location">Locations</Link>
                { ' ' }
                <Link to="/about">About</Link>
                <Route exact path="/" component={ Homepage } />
                <Route path="/Location" component={ Locations } />
                <Route path="/about" component={ About } />
              </div>
            </Router>
            );
    }
}

function About() {
  return <div>My name is Anant Rajeev. I am 20 years old and from Northern California.</div>
}

function Homepage() {
  return <div>Welcome to Anant's Website.</div>
}

export default App;