import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './buttons/LoginButton';
import './Login.css';

class Login extends React.Component {
  render() {
    return(
      <div className = 'loginCard'>
      <Card style={{ width: '22rem',height :'200px' }}>
        <Card.Body className='cradbody'>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
         

        </Card.Body>
        <div className = 'button'>
          <LoginButton/>  

          </div>
      </Card>
      </div>
    )
  }
}

export default Login;
