import React, { Component } from 'react';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import Profile from './Profile';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class Header extends React.Component {
 constructor(props){
     super(props)
 }

    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/" onClick={this.props.hidePlace}><Navbar.Brand>Travel Agency</Navbar.Brand></Link>
                <Link to="/" onClick={this.props.hidePlace}>Home</Link>

                <Link to="/profile">Profile</Link>
                <Link to="/mybooks">My Books</Link>

                <Link to="/aboutUs">About Us</Link>


                {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}

            </Navbar>
        )
    }
}

export default withAuth0(Header)
