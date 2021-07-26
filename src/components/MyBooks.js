import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';




class MyBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myHotels: [],
            userInfo : {}
            
        }
    }


    componentDidMount = async () => {
        const { user, isAuthenticated } = this.props.auth0;

        let userEmail = {
            email: user.email
        }
        console.log('email : ', userEmail);

        let hotelsData = await axios.get(`http://localhost:3001/mybooks/${user.email}`, userEmail)


        await this.setState({
            myHotels: hotelsData.data[0].bookedData,
            userInfo : hotelsData.data[0]
        })

        console.log(this.state.myHotels);

    }



    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <div>
                <h1>this page for booked hotels</h1>
                <h3>Name : {this.state.userInfo.userName}</h3>

                {
                isAuthenticated && 
                   
                    this.state.myHotels.map(hotel => {
                        return (
                            <Card className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >
    
                                <Card.Body>
                                    <Card.Title>{hotel.hotelName}</Card.Title>
    
                                    {/* <Card.Img style={{
                                        boxShadow: '2px 2px 2px #ccc',
                                        width: '200px', height: '200px'
                                    }} variant="top"
                                        src={hotel.hotelimg} alt={hotel.hotelName} /> */}
                                    <Card.Text>
                                        numberof room : {hotel.roomsNum}
                                    </Card.Text>
                                    <Card.Text>
                                        numof kids  : {hotel.kidsNum}
                                    </Card.Text>
                                </Card.Body>
    
                                {/* <Button onClick={() => this.deleteHotel(hotelIndex)} variant="danger" >Delete</Button>
                                <Button onClick={() => this.updateHotel(hotelIndex)} variant="warning" >Update</Button>
                                <Button onClick={() => this.bookNow(hotel.hotelName, hotelIndex)} variant="primary">Book Now</Button> */}
                            </Card>
                        )
                    })
                    }
                
             

            </div>
        )
    }
}

export default withAuth0(MyBooks)
