import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
          <Route component={Nav} />
          <div className="App">
          <Switch>
            <Route exact path="/" render={ browserProps => <Home {...browserProps} users={this.props.users} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          </div>
      </Router>
    );
  }
}
export default App;
