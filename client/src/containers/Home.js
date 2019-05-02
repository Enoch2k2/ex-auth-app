import React, { Component } from 'react'
import '../css/home.css';
import { connect } from 'react-redux';
import { loadUsers, authenticateToken } from '../actions/users';

export class Home extends Component {
  componentDidMount = () => {
    // if (!authenticateToken()) {
    //   this.props.history.push("/login")
    // }
    this.props.loadUsers();
  }

  render() {
    const users = !this.props.loading ? this.props.users.map((user, i) => <li key={i}>{user.name}</li>) : null
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

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    users: state.users.users
  }
}

export default connect(mapStateToProps, { loadUsers })(Home);
