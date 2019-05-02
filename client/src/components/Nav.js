import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/users';

import '../css/nav.css';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <ul className="right">
          { !localStorage.getItem("token") ? <li><Link to="/signup">Signup</Link></li> : null }
          { !localStorage.getItem("token") ? <li><Link to="/login">Login</Link></li> : null }
          { localStorage.getItem("token") ? <li><Link to="#" onClick={ e => logout(  this.props.history)}>Logout</Link></li> : null }
        </ul>
      </nav>
    )
  }
}

export default Nav
