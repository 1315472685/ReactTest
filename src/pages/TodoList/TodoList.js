import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import '../../css/todoList.css';
// TodoItem===<li key={index} onClick={this.handleDel.bind(this, index)}>{item}</li>
// <button onClick={this.handleAdd.bind(this)}>添加</button>                                        绑定this方式一
// <button onClick={e => this.handleAdd(e)}>添加</button>                                           绑定this方式二
// <button onClick={this.handleAdd}>添加</button>    this.handleAdd = this.handleAdd.bind(this)     绑定this方式三
// return <li key={index} onClick={(e) => this.handleDel(index, e)}>{item}</li>                    传值方式一e作为第二个参数
// return <li key={index} onClick={this.handleDel.bind(this, index)}>{item}</li>                   传值方式二
// 子父组件之间的传值，父组件通过属性的形式向子组件传值，子组件通过通过props接收父组件传过来的值
/**
 * 
  子组件传值给父组件：
  父组件del={this.handleDel.bind(this)} ，将del传给子组件，当子组件调用del方法时，就会调用父组件的handleDel方法
  子组件：调用父组件的方法
  onClick={this.handelDel.bind(this)}
  handelDel() {
    this.props.del(this.props.index)
  }
  通过调用自身的handelDel来调用父组件传过来的del方法
 * 
 * 
 */


/**
 * style
 * 1)import '../../css/todoList.css';
 * 2)let btn = {
     border: 'none',
     background: ' #63d6dc',
     color: '#fff'
   };
 *   style={btn}
 * 
 */

class TodoList extends Component {
  constructor(props) {
    super(props);//初始化
    this.state = {
      list: [],
      inputVal: ''

    }
    this.inputChange = this.inputChange.bind(this)//改变inputChange函数中的this指向
  }
  // 添加数据
  handleAdd() {
    // this.指向button按钮.bind(this)修改handleAdd函数this的指向TodoList,通过this.setState修改state的值
    // 或者----为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleAdd = this.handleAdd.bind(this);
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  // 检测input改变
  inputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  // 删除列表操作
  handleDel(i) {
    let list = [...this.state.list]
    list.splice(i, 1)
    this.setState({
      list: list
    })
  }
  // 渲染数据
  renderDom() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem del={this.handleDel.bind(this)} key={index} index={index} item={item}>添加数据</TodoItem>
        )
      })
    )

  }

  render() {
    let btn = {
      border: 'none',
      background: ' #63d6dc',
      color: '#fff'
    };
    return (
      <Fragment >
        <input className="input" value={this.state.inputVal} onChange={this.inputChange} />
        <button style={btn} className="btn" onClick={e => this.handleAdd(e)}>添加</button>
        <hr></hr>
        <ul>
          {this.renderDom()}
        </ul>
      </Fragment>
    )
  }
}
// ----------------------------------------------------------------
// function TodoList() {
//   function handleAdd() {
//     console.log('handleAdd')
//   }
//   return (
//     <div className="TodoList">
//       <input />
//       <button onClick={handleAdd}>添加</button>
//       <br></br>
//       <ul>
//         <li>
//           learn react
//         </li>
//         <li>
//           learn english
//         </li>
//       </ul>
//     </div>
//   )
// }
export default TodoList;