import React, { Component } from 'react'
import ReactDOM from 'react-dom';
/**
 * constructor 初始化数据
 * render()
 * componentDidMount已经挂载
 * shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。返回true更新往下执行，返回false终止更新流程不往下执行
 * componentDidUpdate 更新后调用
 * componentWillUnmount 销毁前调用
 * 
 */
class LifeCycleChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 1
    }
    console.log('01constructor')
    this.addAgeFn = this.addAgeFn.bind(this)
    this.unmountFn = this.unmountFn.bind(this)
  }

  componentDidMount() {
    console.log('03Component DID MOUNT!')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log(newState, newProps)
    console.log('更新01shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, prevProps)
    console.log('更新03Component DID UPDATE!')
  }
  componentWillUnmount() {
    // 释放内存，如：清空计时器
    console.log('01销毁Component WILL UNMOUNT!')
    return
  }
  // 方法
  addAgeFn() {
    let age = this.state.age
    this.setState({
      age: ++age
    })
  }
  // 销毁组件方法destination
  unmountFn() {
    ReactDOM.unmountComponentAtNode(LifeCycleChild)
  }
  render() {
    console.log('02render，更新02')
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
        <span>age:{this.state.age}</span>
        <br></br>
        <button onClick={this.addAgeFn}>addAge</button>
        <button onClick={this.unmountFn}>销毁组件</button>
      </div>
    );
  }
}
export default LifeCycleChild