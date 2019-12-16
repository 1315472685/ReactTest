import React from "react";
/**
 * 通过调用自身的handelDel来调用父组件传过来的del方
 */
class TodoItem extends React.Component {
  handelDel() {
    const { del, index } = this.props;
    del(index)
    // this.props.del(this.props.index)
  }
  render() {
    const content = this.props
    return (
      <div onClick={this.handelDel.bind(this)}>{content.item}:{content.children}</div>
    )
  }
}
export default TodoItem