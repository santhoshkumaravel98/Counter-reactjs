//const Welcome = () => <h1>Hello, User</h1>

import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <h1>
        Hello {name} {age}
      </h1>
    )
  }
}

export default Welcome
