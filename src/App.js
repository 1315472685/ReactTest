import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    let data = { username: 'test', password: '22222222' }
    this.$post('/login', data, '')
      .then(res => {
        console.log(res)
      })

  }
  render() {

    return (
      <div className="App">
        <header className="App-header">

          <div className="box"></div>
          <br />
          <Button type="primary">Primary</Button>
          <h2>Hello World</h2>
          <img src={logo} className="App-logo" alt="logo" /></header>

      </div>
    )
  }
}

export default App;
