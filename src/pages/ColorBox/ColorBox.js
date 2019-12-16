import React, { Component } from 'react';
import Box from './Box'
import Label from './Label'
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#5ec7af'
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(i) {
    
    this.setState({
      color: i
    })
  }
  render() {
    let styleCss = {
      height: 250,
      width: 200,
      'margin': 'auto',
      'marginTop': 20,
      border: '1px solid #dadada',
      textAlign: 'center'

    };
    return (

      <div style={styleCss}>
        <Box color={this.state.color}></Box>
        <Label change={this.changeColor} ></Label>
      </div>
    )
  }
}

export default ColorBox;