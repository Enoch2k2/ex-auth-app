import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadUsers } from './actions/users';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.loadUsers();
  };

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <div className="App">
            <Route exact path="/" render={ browserProps => <Home {...browserProps} users={this.props.users} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, { loadUsers })(App);
