// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password, error} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {error} = this.state
    return (
      <div className="login-form-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
            className="website-login"
          />
        </div>
        <div className="login-form">
          <form onSubmit={this.onSubmitForm}>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
                alt="website logo"
                className="website-logo"
              />
            </div>
            <div className="input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                className="inputEl"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                className="inputEl"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>
            <div>
              <button type="submit" className="button">
                Login
              </button>
            </div>
            <p>{error}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
