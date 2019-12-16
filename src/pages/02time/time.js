import React, { Component } from 'react'
/**
 * constructor初始化数据
 * componentDidMount挂载DOM元素
 * componentWillUnmount销毁前
 * 
 */
class Time extends Component {
  // 初始化数据
  constructor(props) {
    super(props);
    this.state = {
      num: this.getTimeFn()
    }
  }
  // 方法会在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        num: this.getTimeFn()
      })
    }, 1000);
  }
  // 销毁前
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // 获取时间
  getTimeFn() {
    var now = new Date()
    // var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var Hour = now.getHours()
    var Min = now.getMinutes()
    var Sen = now.getSeconds()
    if (month < 10) {
      month = '0' + month
    }
    if (date < 10) {
      date = '0' + date
    }
    if (Hour < 10) {
      Hour = '0' + Hour
    }
    if (Min < 10) {
      Min = '0' + Min
    }
    if (Sen < 10) {
      Sen = '0' + Sen
    }
    // return `${year}-${month}-${date}  ${Hour}:${Min}:${Sen}`
    return `${Hour}:${Min}:${Sen}`
  }
  render() {
    let box = {
      boxSizing: 'border-box',
      width: 200,
      height: 200,
      margin: '50% auto',
      textAlign: 'center',
      background: '#00151b',
      color: '#00f3bd',
      paddingTop: 52,
      borderRadius: 20
    },
      num = {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'monospace'
      },
      p = {
        fontSize: 16,

      }
    return (
      <div style={box}>
        <div style={num}>
          {this.state.num}
        </div>
        <p style={p}>现在是北京时间</p>
      </div>
    )
  }
}
export default Time