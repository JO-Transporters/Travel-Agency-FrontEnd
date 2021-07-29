import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';
import Table from 'react-bootstrap/Table';
import UpdateBook from './buttons/UpdateBook';
import './MyBooks.css'
class MyBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myHotels: [],
            userInfo: {},
            show: false,
            index: 0,
            bookInfo: {},
        }
    }
    componentDidMount = async () => {
        const { user, isAuthenticated } = this.props.auth0;
        let userEmail = {
            email: user.email
        }




        let hotelsData = await axios.get(`https://jordan-black-iris.herokuapp.com/mybooks/${user.email}`, userEmail)
        let data = JSON.stringify(hotelsData.data[0].bookedData);
        localStorage.setItem("Books", data);
        this.setState({
            myHotels: hotelsData.data[0].bookedData,
            userInfo: hotelsData.data[0]
        })
    }
    cancelBook = async (index) => {
        const { user, isAuthenticated } = this.props.auth0;
        let hotelsData = await axios.delete(`https://jordan-black-iris.herokuapp.com/deletebook/${index}/${user.email}`)
        localStorage.removeItem("Books");
        let data = JSON.stringify(hotelsData.data);
        localStorage.setItem("Books", data);
        this.setState({
            myHotels: hotelsData.data,
        })
    }
    handleClose = async () => {
        this.setState({
            show: false
        })
    }
    updateBook = async (index) => {
        const { hotelName, kidsNum, roomsNum, visitorsNum, checkInDate, checkOutDate, price } = this.state.myHotels[index];
        this.setState({
            index: index,
            show: true,
            bookInfo: {
                hotelName: hotelName,
                kidsNum: kidsNum,
                roomsNum: roomsNum,
                visitorsNum: visitorsNum,
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                price: price,
            }
        })
    }
    handleUpdate = async (event) => {
        event.preventDefault();
        const { user, isAuthenticated } = this.props.auth0;
        this.setState({
            show: false,
        })
        let updated = {
            hotelName: this.state.myHotels[this.state.index].hotelName,
            price: this.state.myHotels[this.state.index].price,
            kidsNum: event.target.kids.value,
            roomsNum: event.target.room.value,
            visitorsNum: event.target.visit.value,
            checkInDate: event.target.in.value,
            checkOutDate: event.target.out.value,
        }
        let updatedBook = await axios.put(`https://jordan-black-iris.herokuapp.com/updatebook/${this.state.index}/${user.email}`, updated);
      
        this.setState({
            myHotels: updatedBook.data.bookedData
        })
    }
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
                <div className="mybooks">
                    <UpdateBook show={this.state.show} handleClose={this.handleClose} bookInfo={this.state.bookInfo} handleUpdate={this.handleUpdate} />
                    <h1 style={{ fontFamily: 'Roboto Mono', color: '#05445E' }}>{this.state.userInfo.userName} Books</h1>
                    {/* <h3>Name : {this.state.userInfo.userName}</h3> */}
                    <Table striped bordered hover>
                        <thead style={{ backgroundColor: '#05445E', color: '#D4F1F4' }}>
                            <tr>
                                <th>Hotel Name</th>
                                <th>Kids Number</th>
                                <th>Rooms Number</th>
                                <th>Visitor Number</th>
                                <th>CheckIn Date</th>
                                <th>CheckOut Date</th>
                                <th>total price</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.myHotels.map((hotel, index) => {
                                return (
                                    <tr>
                                        <td>{hotel.hotelName}</td>
                                        <td>{hotel.kidsNum}</td>
                                        <td>{hotel.roomsNum}</td>
                                        <td>{hotel.visitorsNum}</td>
                                        <td>{hotel.checkInDate}</td>
                                        <td>{hotel.checkOutDate}</td>
                                        <td>{`${Number(Number(hotel.price) * Number(hotel.roomsNum))} JOD`}</td>
                                        <td> <Button onClick={() => { this.cancelBook(index) }} variant="danger"> 🗶 </Button>
                                            <Button onClick={() => { this.updateBook(index) }} variant="success"> 🖉 </Button> </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}
export default withAuth0(MyBooks)