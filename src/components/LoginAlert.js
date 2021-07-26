import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import LoginButton from './buttons/LoginButton';

class LoginAlert extends React.Component {
constructor(props){
  super(props)
}

  render() {
    
    return (
      <div>
        <Alert variant="danger" onClose={this.props.setShow} dismissible>
          <Alert.Heading>OOOPS! You Need To Login First to Book A Room..</Alert.Heading>
          <LoginButton/>

        </Alert>

      </div>
    )
  }
}

export default LoginAlert;
