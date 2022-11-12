import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

class UserInfo extends Component {
  state = {name: '', email: '', phoneNumber: '', userArray: []}

  submitForm = event => {
    event.preventDefault()
    const {name, email, phoneNumber} = this.state
    const newPerson = {
      id: uuidv4(),
      name,
      email,
      phoneNumber,
    }
    this.setState(prevState => ({
      userArray: [...prevState.userArray, newPerson],
      name: '',
      email: '',
      phoneNumber: '',
    }))
  }

  enterName = event => {
    this.setState({name: event.target.value})
  }

  enterEmail = event => {
    this.setState({email: event.target.value})
  }

  enterPhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  render() {
    const {name, email, phoneNumber} = this.state
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input onChange={this.enterName} type="text" value={name} required />
          <input
            onChange={this.enterEmail}
            type="email"
            value={email}
            required
          />
          <input
            onChange={this.enterPhoneNumber}
            type="tel"
            value={phoneNumber}
            required
          />
          <button type="submit">Checkout</button>
        </form>
      </div>
    )
  }
}

export default UserInfo
