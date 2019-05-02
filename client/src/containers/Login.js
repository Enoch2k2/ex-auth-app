import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/users';
import { authenticateToken } from '../actions/users';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    if (authenticateToken()){ this.props.history.push("/") }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login);
