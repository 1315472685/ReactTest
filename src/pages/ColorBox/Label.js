import React, { Component } from 'react'
class Label extends Component {
  constructor(props) {
    super(props);//初始化
    this.changeVal = this.changeVal.bind(this)
  }
  changeVal(e) {
    let { change } = this.props
    change(e.target.value)
  }
  render() {
    let style = {
      marginTop: 10
    };
    let input = {
      boxSizing: 'border-box',
      padding: 10,
      outline: 'none',
      width: '100%',
      border: 'none'
    }
    return (
      <div style={style}>
        <input onChange={this.changeVal} style={input} placeholder="请输入十六进制颜色值" ></input>
      </div>
    )
  }
}
export default Label