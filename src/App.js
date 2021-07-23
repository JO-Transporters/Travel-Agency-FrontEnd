import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);

    return (
      <div>
        <Router>
          <Header />


          <Switch>

            <Route exact path="/">
             <Main />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default withAuth0(App)
