import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {hot} from "react-hot-loader";

import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default hot(module)(App);