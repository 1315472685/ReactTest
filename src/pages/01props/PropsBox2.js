import React, { Component } from 'react'
import PropsBox3 from './PropsBox3'
/**
 * 组件间相互传值
 * 
 */
class PropsBox2 extends Component {
  render() {
    return (
      <div>
        <PropsBox3 {...this.props}></PropsBox3>
      </div>
    )
  }
}
export default PropsBox2