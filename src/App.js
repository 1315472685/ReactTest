import React from 'react';
import logo from './logo.svg';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/es/date-picker/style/css';
import './App.css';
import './App.scss';
// import { postFn } from './view/axios/http'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/**
 * ES6 的 class 来定义组件与 JavaScript 函数组件在 React 里是等效的。
 */

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
          <DatePicker />
          <h2>Hello World</h2>
          <img src={logo} className="App-logo" alt="logo" /></header>

      </div>
    )
  }
}

export default App;
