import React from 'react';
import { Card, Col, Row } from 'react-bootstrap/';
import CardGroup from 'react-bootstrap/CardGroup';
import './AboutUs.css';
import hema from './img/hema.jpg'





class AboutUs extends React.Component {
  render() {
    return (
<>
<div class="about-section">
      <h1>Jo-Transporter Team</h1>
      <p  >An ambitious youth team  seeks to benefit the community within the software development program by participating in an       intensive software devlopment course offered by abdulaziz ghurair's department of computing (ASAC) at luminus university technical     collage(LTUC) accredited by the US code fellows academy in seattle.</p>
     </div>
      <ul class="cards">
        <li>
          <a class="card" >
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01U3M2GXFE-a0954ee44505-512" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01U3M2GXFE-a0954ee44505-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Sanaa Al_Moghraby</h3>
                  <span class="card__status">Computer Science</span>
                </div>
              </div>

              <p class="card__description">
                <a target="_blank" href="https://github.com/sanaa-almoghraby">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>

                <a target="_blank" href="https://web.facebook.com/sanaakahlil/">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/sanaa-almoghraby-241303210/">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>
              </p>
            </div>
          </a>
        </li>


        <li>
          <a class="card" >
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01TUDCH1D3-5453bbbf29fc-512" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01TUDCH1D3-5453bbbf29fc-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Rafeef Alhayek</h3>
                  <span class="card__status">English Language</span>
                </div>
              </div>
              <p class="card__description">
                <a target="_blank" href="https://github.com/R-Alhayek">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>

                <a target="_blank" href="https://icons8.com/icon/107615/twitter-squared">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://icons8.com/icon/107615/twitter-squared">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>

              </p>
            </div>
          </a>
        </li>


        <li>
          <a class="card" >
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01TXQYRAPM-d6ba75ea02a0-512" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01TXQYRAPM-d6ba75ea02a0-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Mariam Alshammari</h3>
                  {/* <span class="card__tagline">Computer Information Systems</span>             */}
                  <span class="card__status">CIS</span>
                </div>
              </div>
              <p class="card__description">
                <a target="_blank" href="https://github.com/MariamAlshammari?tab=repositories">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>

                <a target="_blank" href="https://www.facebook.com/mariam.alshammary.1/">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/mariam-alshammari-9a5651134/">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>

              </p>
            </div>
          </a>
        </li>
       



        <li>
          <a class="card" >
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01TGNASKRV-30688543cb75-512" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01TGNASKRV-30688543cb75-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Siham khaloof</h3>
                  <span class="card__status">Biomedical Engineer</span>
                </div>
              </div>
              <p class="card__description">
                <a target="_blank" href="https://github.com/sbkhaloof">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>
                <a target="_blank" href="https://www.facebook.com/seham.malkawi.7">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/siham-khaloof-697475210/">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>

              </p>
            </div>
          </a>
        </li>

        {/* <div className = 'males'> */}
        <li>
          <a class="card" >
            <img src={hema} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01TQN6SQHL-715676c120e7-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Ibrahim Khdairat</h3>
                  <span class="card__status">Electrical Engineering</span>
                </div>
              </div>
              <p class="card__description">
                <a target="_blank" href="https://github.com/Ibrahim-Khdairat">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>

                <a target="_blank" href="https://www.facebook.com/ibrahim.kuderat">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/ibrahim-khdairat-4bb7811a2">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>

              </p>
            </div>
          </a>
        </li>
        <li>
          <a class="card" >
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01TXMV8X7V-24cf038424c3-512" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src="https://ca.slack-edge.com/TNGRRLUMA-U01TXMV8X7V-24cf038424c3-512" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Alaa Smadi</h3>
                  <span class="card__status">Survey Engineer</span>
                </div>
              </div>
              <p class="card__description">
                <a target="_blank" href="https://github.com/AlaaN-Smadi">
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                </a>
                <a target="_blank" href="https://icons8.com/icon/107615/twitter-squared">
                  <img src="https://img.icons8.com/fluent-systems-regular/32/000000/facebook.png" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/alaa-smadi-a9b17a210/">
                  <img src="https://img.icons8.com/material-outlined/32/000000/linkedin--v1.png" />
                </a>

              </p>
            </div>
          </a>
        </li>


       
        {/* </div> */}
      </ul>

</>
    )
  }
}

export default AboutUs;