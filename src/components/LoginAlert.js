import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import LoginButton from './buttons/LoginButton';
import './LoginAlert.css'

class LoginAlert extends React.Component {
constructor(props){
  super(props)
}

  render() {
    
    return (
      <div className = 'alertBody'>
        <Alert className='alert' variant="danger" onClose={this.props.setShow} dismissible>
          <Alert.Heading>OOOPS! You Need To Login First to Book A Room..</Alert.Heading>
          <div className='login'>
          <LoginButton />

          </div>

        </Alert>

      </div>
    )
  }
}

export default LoginAlert;
