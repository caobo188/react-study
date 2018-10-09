import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './views/home/index.js'
import About from './views/about/index.js'

import './App.css'
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/about">关于我们</NavLink>
          </div>
          <div>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}
 
export default App