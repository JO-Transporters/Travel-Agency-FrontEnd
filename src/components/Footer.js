import React, { Component } from 'react'
import logo from './image/logo.jpg'
import logo2 from './image/logos.jpeg'
import './Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div id="text">
                    <div className="about">
                        <h5 className="h5s">Black Iris Tours</h5>
                        <h6>Black Iris Tours is a comprehensive travel <br />
                            agency covering every tourist place inside Jordan <br />
                            and offering the ability to book your preferred hotels.</h6>
                    </div>
                    <div className="about">
                        <h5 className="h5s">ADDRESS & CONTACT INFO</h5>
                        <h6>7th Circle, City Terminal.
                            <br /> Amman, Jordan</h6>
                        <li>:phone:: 0790783215</li>
                        <li>:e-mail:: tours@blackiris.com</li>
                    </div>
                    <div className="about">
                        <h5 className="h5s">FOLLOW US</h5>
                        <a href="https://icons8.com/icon/107615/twitter-squared"><img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" /></a>
                        <a href="https://icons8.com/icon/107615/twitter-squared"><img src="https://img.icons8.com/ios/30/000000/twitter-squared.png" /></a>
                        <a href="https://icons8.com/icon/107615/twitter-squared"><img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" /></a>
                        <a href="https://icons8.com/icon/107615/twitter-squared"><img src="https://img.icons8.com/fluent-systems-regular/32/000000/instagram-new--v1.png" /></a>
                    </div>
                    <div id="Copyrights">
                        <p>Copyrights © Black Iris Tours 2021. All Rights Reserved <p>© Powerd by: Black Iris Team</p></p>
                    </div>
                </div>
                <div id="logodiv">
                    <img id="logo" src={logo2} />
                </div>
            </div>
        )
    }
}
export default Footer