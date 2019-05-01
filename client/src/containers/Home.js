import React, { Component } from 'react'

import '../css/home.css';

export class Home extends Component {
  render() {
    const users = this.props.users.map((user, i) => <li key={i}>{user.name}</li>)
    return (
      <div id="home">
        <h1>Hello World!</h1>
        <hr />
        <h3>User List</h3>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

Home.defaultProps = {
  users: []
}

export default Home
