import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">Primary</Button>
          <Button type="primary" shape="circle" icon="search" />
          <img src={logo} className="App-logo" alt="logo" /></header>

      </div>

    )
  }
}

export default App;
