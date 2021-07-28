import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { Card, Button } from 'react-bootstrap/';
import AboutUs from './components/AboutUs';

import Place from './components/Place';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyBooks from './components/MyBooks';
import MyResrevs from './components/MyResrevs';
import HomeSlides from './components/HomeSlides';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPlace: false,
      place: {},
      index: 0,
    }
  }


  selectedPlace = async (place, index) => {
    this.setState({
      showPlace: true,
      place: place,
      index: index,

    })
  }

  hidePlace = async () => {
    this.setState({
      showPlace: false,
      place: {}
    })
  }
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    let star =[];
  {for (let index = 0; index < 5; index++) {
    
    star.push('⭐')
  }}

    return (
      <div>
        <Router>
          <Header hidePlace={this.hidePlace} />
        

          <Switch>

            <Route exact path="/">
              {this.state.showPlace ? <Place place={this.state.place} index={this.state.index} /> : <Main selectedPlace={this.selectedPlace} />}
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/mybooks">
             <MyResrevs/>
            </Route>

            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>

          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default withAuth0(App)
