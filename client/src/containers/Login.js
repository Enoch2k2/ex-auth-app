import React, { Component } from 'react'

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
