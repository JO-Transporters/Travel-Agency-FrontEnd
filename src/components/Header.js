import React, { Component } from 'react';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import Profile from './Profile';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from './image/logo.jpg'
import { withAuth0 } from '@auth0/auth0-react';
import logo2 from './image/logos.jpeg'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }
    // componentDidMount = () => {

    //     let userOnLS = JSON.parse(localStorage.getItem("Books"));
    //     if (userOnLS !== undefined && userOnLS !== null) {

    //     this.setState({
    //         count: userOnLS.length
    //     })
    // }
    // {isAuthenticated&& this.state.count}
    // }

    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <Navbar collapseOnSelect expand="lg" id="nav">
                <Link to="/" className="title" onClick={this.props.hidePlace}><Navbar.Brand id='title' > <div id="logodivH">
                    <img id="logoH" src={logo2} />
                </div></Navbar.Brand></Link>

                <Link to="/" onClick={this.props.hidePlace} className="pages">Home</Link>
                <Link to="/profile" className="pages">Profile</Link>
                <Link to="/mybooks" className="pages">Hotel Books </Link>

                <Link to="/aboutUs" className="pages" id='aboutus'>About Us</Link>


                {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}

            </Navbar>
        )
    }
}

export default withAuth0(Header)
