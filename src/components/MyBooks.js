import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';
import Table from 'react-bootstrap/Table';
import UpdateBook from './buttons/UpdateBook';





class MyBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myHotels: [],
            userInfo: {},
            show : false,
            index : 0,
            bookInfo : {},

        }
    }


    componentDidMount = async () => {
        const { user, isAuthenticated } = this.props.auth0;

        let userEmail = {
            email: user.email
        }

        let hotelsData = await axios.get(`http://localhost:3001/mybooks/${user.email}`, userEmail)


        await this.setState({
            myHotels: hotelsData.data[0].bookedData,
            userInfo: hotelsData.data[0]
        })


    }


    cancelBook = async (index)=> {
        const { user, isAuthenticated } = this.props.auth0;

    
        let hotelsData = await axios.delete (`http://localhost:3001/deletebook/${index}/${user.email}`)
     
        await this.setState({
            myHotels: hotelsData.data,
        
        })
        

    }

    handleClose = async () =>{
        await this.setState({
            show : false
        })
    }

    updateBook = async (index) =>{
      
        const { hotelName, kidsNum, roomsNum, visitorsNum,checkInDate,checkOutDate } = this.state.myHotels[index];

        await this.setState({
            index : index,
            show : true,
            bookInfo : {
                hotelName : hotelName,
                kidsNum : kidsNum,
                roomsNum : roomsNum,
                visitorsNum : visitorsNum,
                checkInDate : checkInDate,
                checkOutDate : checkOutDate,
            }
        })
    }

    handleUpdate = async (event) =>{
        event.preventDefault();
        const { user, isAuthenticated } = this.props.auth0;


        await this.setState({
            show : false,
        })

        let updated = {
            hotelName : this.state.myHotels[this.state.index].hotelName,
            kidsNum : event.target.kids.value,
            roomsNum : event.target.room.value,
            visitorsNum : event.target.visit.value,
            checkInDate : event.target.in.value,
            checkOutDate : event.target.out.value,
        }

        let updatedBook = await axios.put(`http://localhost:3001/updatebook/${this.state.index}/${user.email}` ,updated );

        await this.setState({
            myHotels : updatedBook.data.bookedData
        })

    }


    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <div>
                <UpdateBook show = {this.state.show} handleClose = {this.handleClose} bookInfo = {this.state.bookInfo} handleUpdate = {this.handleUpdate}/>
                <h1>this page for booked hotels</h1>
                <h3>Name : {this.state.userInfo.userName}</h3>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hotel Name</th>
                            <th>Kids Number</th>
                            <th>Rooms Number</th>
                            <th>Visitor Number</th>
                            <th>CheckIn Date</th>
                            <th>CheckOut Date</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myHotels.map((hotel,index) => {
                            return (
                                <tr>
                                    <td> <Button onClick={()=>{this.cancelBook(index)}} variant="danger">Cancel Booking</Button>
                                    <Button onClick={()=>{this.updateBook(index)}}  variant="success">Update Book</Button> </td>
                                    <td>{hotel.hotelName}</td>
                                    <td>{hotel.kidsNum}</td>
                                    <td>{hotel.roomsNum}</td>
                                    <td>{hotel.visitorsNum}</td>
                                    <td>{hotel.checkInDate}</td>
                                    <td>{hotel.checkOutDate}</td>
                                </tr>

                            )
                        })
                        }
                      


                    </tbody>
                </Table>

                {
                    // isAuthenticated && 

                    //     this.state.myHotels.map(hotel => {
                    //         return (
                    //             <Card className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                    //                 <Card.Body>
                    //                     <Card.Title>{hotel.hotelName}</Card.Title>

                    //                     {/* <Card.Img style={{
                    //                         boxShadow: '2px 2px 2px #ccc',
                    //                         width: '200px', height: '200px'
                    //                     }} variant="top"
                    //                         src={hotel.hotelimg} alt={hotel.hotelName} /> */}
                    //                     <Card.Text>
                    //                         numberof room : {hotel.roomsNum}
                    //                     </Card.Text>
                    //                     <Card.Text>
                    //                         numof kids  : {hotel.kidsNum}
                    //                     </Card.Text>
                    //                 </Card.Body>

                    //                 {/* <Button onClick={() => this.deleteHotel(hotelIndex)} variant="danger" >Delete</Button>
                    //                 <Button onClick={() => this.updateHotel(hotelIndex)} variant="warning" >Update</Button>
                    //                 <Button onClick={() => this.bookNow(hotel.hotelName, hotelIndex)} variant="primary">Book Now</Button> */}
                    //             </Card>
                    //         )
                    //     })
                }



            </div>
        )
    }
}

export default withAuth0(MyBooks)