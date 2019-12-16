import React, { Component } from 'react'
import PropsBox2 from './PropsBox2'
/**
 * 组件间相互传值
 * 
 */
class PropsBox1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yue',
      age: 18,
      job: 'teacher'
    }
  }
  render() {
    return (
      <div>
        <PropsBox2 name={this.state.name} age={this.state.age} job={this.state.job}></PropsBox2>
      </div>
    )
  }
}
export default PropsBox1