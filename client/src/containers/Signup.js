import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions/users';
import { authenticateToken } from '../actions/users';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    if (authenticateToken()) { this.props.history.push("/") }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <form onSubmit={this.onSubmit}>
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
          <input type="submit" value="Signup" />
        </form>
      </div>
    )
  }
}

export default connect(null, {signup})(Signup);
