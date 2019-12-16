import React, { Component } from "react";
class Box extends Component {
  render() {
    let { color } = this.props
    let box = {
      color: '#fff',
      height: 200,
      background: color
    }
    return (
      <div style={box}>{color}</div>
    )
  }
}
export default Box;