import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Place from './components/Place';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyBooks from './components/MyBooks';
import HomeSlides from './components/HomeSlides';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPlace: false,
      place : {},
      index : 0,
    }
  }


  selectedPlace = async (place , index) => {
     await this.setState({
      showPlace : true,
      place : place,
      index : index,

     })
  }

  hidePlace = async () =>{
    await this.setState({
      showPlace : false,
      place : {}
     })
  }
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div>
        <Router>
          <Header hidePlace={this.hidePlace}/>

          <Switch>

            <Route exact path="/">
              {this.state.showPlace ? <Place place={this.state.place} index = {this.state.index}/> : <Main selectedPlace={this.selectedPlace} />}
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/mybooks">
              <MyBooks/>
            </Route>

          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default withAuth0(App)
