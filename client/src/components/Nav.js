import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/nav.css';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <ul className="right">
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="#">Logout</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
