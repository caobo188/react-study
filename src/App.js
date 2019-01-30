import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './views/home/index.js'
import About from './views/about/index.js'
import Mine from './views/mine/index.js'

import './App.css'
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavLink to="/home">首页</NavLink>
            <span>首页</span>
            <NavLink to="/mine">个人中心</NavLink>
          </div>
          <div>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/mine" component={Mine} />
          </div>
        </div>
      </Router>
    )
  }
}
 
export default App