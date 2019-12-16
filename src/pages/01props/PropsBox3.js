import React, { Component } from 'react'
/**
 * 组件间相互传值
 * 
 */
class PropsBox3 extends Component {
  render() {
    // let { name, age, job } = this.props
    let item = this.props
    return (
      // <div>{name}:{age}:{job}</div>
      <div>{item.name}:{item.age}:{item.job}</div>
    )
  }
}
export default PropsBox3