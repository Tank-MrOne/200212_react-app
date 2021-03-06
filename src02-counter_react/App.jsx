import React, { Component } from 'react'

export default class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const number = this.refs.number.value*1

    this.setState({
      count: this.state.count + number
    })
  }

  decrement = () => {
    const number = this.refs.number.value*1

    this.setState({
      count: this.state.count - number
    })
  }

  incrementIfOdd = () => {
    const number = this.refs.number.value*1
    const count = this.state.count
    if (count%2===1) {
      this.setState({
        count: count + number
      })
    }
    
  }

  incrementAsync = () => {
    const number = this.refs.number.value*1

    setTimeout(() => {
      this.setState({
        count: this.state.count + number
      })
    }, 1000);
  }

  render() {
    const count = this.state.count
    return (
      <div>
        <div>click {count} times</div>
        <br/>
        <select ref="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
