import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncreament = () => {
    this.setState(prevState => {
      console.log(`Previous state count =  ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecreament = () => {
    this.setState(prevState => {
      console.log(`Previous state count = ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container ">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncreament}>
            Increase
          </button>
          <button className="button" onClick={this.onDecreament}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
