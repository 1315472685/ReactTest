import React, { Component } from 'react'
import LifeCycleChild from './lifeCycleChild'
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <LifeCycleChild myNumber={this.state.data}></LifeCycleChild>
      </div>
    );
  }
}





export default LifeCycle