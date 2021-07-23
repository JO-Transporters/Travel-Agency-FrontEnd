import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login'

class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        console.log(user);
        return (
            <>
                {
                    <>
                        {isAuthenticated ? 
                           <Card style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                                <Card.Body>
                                    <Card.Title>Hello {user.name}</Card.Title>
                                    <Card.Text>
                                        Email : {user.email}
                                    </Card.Text>
                                    <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={user.picture} alt={user.name} />
                                </Card.Body>
                            </Card> : <Login/>
                        }




                    </>
                }

            </>
        )
    }
}

export default withAuth0(Profile);
