import React, { Component } from 'react';
import logo from '../../logo.jpg';
import '../../App.css';

function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}</h2>
}

function HelloMessage(props) {
  return <h1>欢迎登录  {props.username}!</h1>;
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      title: '首页',
      site: 'www.baidu.com',
      clickCount: 0,
      value: ''
    }
    this.onCount = this.onCount.bind(this)
    this.onChange = this.onChange.bind(this)
  }
 
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
 
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
 
  tick () {
    this.setState({
      date: new Date()
    })
  }
  
  onUser (name, e) {
    alert(name, e)
  }
  
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  
  onCount () {
    this.setState((state) => {
      return {
        clickCount: state.clickCount + 1
      }
    })
  }
  
  render() {
    var value = this.state.value
    return (
      <div className="App">
        <HelloMessage username="admin"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>京城商城-{this.state.title}</h2>
        </div>
        <FormattedDate date={this.state.date} />
        <div>
          <Link site={this.state.site} />
        </div>
        <button onClick={this.onUser.bind(this, this.state.title)}>个人中心</button>
        <h2 onClick={this.onCount}>点我！点击次数为: {this.state.clickCount}</h2>
        <input type="text" value={value} onChange={this.onChange} />
        <h4>{value}</h4>
        <p className="App-intro">
          2017-2018
        </p>
      </div>
    )
  }
}

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  
  render () {
    return (
      <a href={this.props.site}>{this.props.site}</a>
    )
  }
}

export default Home