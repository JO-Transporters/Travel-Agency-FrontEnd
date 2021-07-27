import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';
import AddHotelModal from './buttons/AddHotelModal';
import UpdateHotel from './buttons/UpdateHotel';
import AddBookModal from './buttons/AddBookModal';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './buttons/LoginButton';
import LoginAlert from './LoginAlert';
import PlaceSlides from './PlaceSlides';



class Place extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showAddHotel: false,
            hotelsArray: [],
            showHotelUpdate: false,
            hotelIndex: 0,
            hotelObj: {},
            showBookModal: false,
            hotelName: "",
            price:"",
            bookedData: [],
            alert: false,

        }
    }

    componentDidMount = async () => {

        let placesData = await axios.get('http://localhost:3001/places')

        await this.setState({
            hotelsArray: placesData.data[this.props.index].hotels,
        })


    }

    bookNow = async (hotelName,index,price) => {


        await this.setState({
            hotelName: hotelName,
            price:price,
            showBookModal: true,
            alert: true,

        })
    }

    setShow = async () => {
        await this.setState({
            alert: false
        })
    }

    addHotel = async () => {
        await this.setState({
            showAddHotel: true,
        })
    }
    handleForm = async (event) => {
        event.preventDefault();
        let hotelObj = {
            hotelName: event.target.name.value,
            hotelRate: event.target.rate.value,
            location: event.target.location.value,
            hotelimg: event.target.img.value,
            price:event.target.price.value

        }

        let hotelData = await axios.post(`http://localhost:3001/addHotel/${this.props.index}`, hotelObj);

        await this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,
        })


        await this.setState({
            showAddHotel: false,
        })
    }

    handleClose = async () => {
        await this.setState({
            showAddHotel: false,
            showHotelUpdate: false,
            showBookModal: false

        })
    }


    deleteHotel = async (hotelIndex) => {

        let hotelData = await axios.delete(`http://localhost:3001/deletehotel/${this.props.index}/${hotelIndex}`)

        await this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,

        })

    }

    updateHotel = async (hotelIndex) => {
        await this.setState({
            showHotelUpdate: true,
            hotelIndex: hotelIndex,
            hotelObj: this.state.hotelsArray[hotelIndex],
        })
    }

    handleUpdate = async (event) => {
        event.preventDefault();

        let updatedHotelObj = {
            hotelName: event.target.name.value,
            hotelimg: event.target.img.value,
            hotelRate: event.target.rate.value,
            location: event.target.location.value,
            price:event.target.price.value,

        }

        let hotelData = await axios.put(`http://localhost:3001/updatehotel/${this.props.index}/${this.state.hotelIndex}`, updatedHotelObj)



        await this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,

            showHotelUpdate: false,
        })
    }

    handelBookForm = async (event) => {
        event.preventDefault();
        {/* // hotelName, checkInDate, checkOutDate, visitorsNum, roomsNum, kidsNum, userName, userEmail, phoneNumber */ }
        const { user, isAuthenticated } = this.props.auth0;
        let bookedObj = {

            hotelName: this.state.hotelName,
            price: this.state.price,
            checkInDate: event.target.checkInDate.value,
            checkOutDate: event.target.checkOutDate.value,
            visitorsNum: event.target.visitorsNum.value,
            roomsNum: event.target.roomsNum.value,
            kidsNum: event.target.kidsNum.value,
            phoneNumber: event.target.phoneNumber.value,
            userName: user.name,
            userEmail: user.email

        }
        
     let userBookInfo =   await axios.post(`http://localhost:3001/addnewbook`, bookedObj);

        await this.setState({
            showBookModal: false
        })

    }

    render() {
        console.log(this.props.place);
        const { user, isAuthenticated } = this.props.auth0;
        return (

            <div>
 <img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.3fb65df48ea9b1418d02d4dc6b9a89f1&center=32.551445,35.851479&zoom=15`} alt="irbid" />
      
                <PlaceSlides slideshowimg={this.props.place.slideShow} />

                <Button onClick={this.addHotel} variant="primary">Add Hotel</Button>

                <AddHotelModal show={this.state.showAddHotel}
                    handleClose={this.handleClose}
                    handleForm={this.handleForm} />

                <UpdateHotel show={this.state.showHotelUpdate}
                    handleClose={this.handleClose}
                    hotelObj={this.state.hotelObj}
                    handleUpdate={this.handleUpdate} />


                {this.state.alert && <>{isAuthenticated ? <AddBookModal show={this.state.showBookModal} handleClose={this.handleClose} hotelName={this.state.hotelName} handleForm={this.handelBookForm} /> : <LoginAlert setShow={this.setShow} />}</>}


                <h2>{this.props.place.name}</h2>



                {this.state.hotelsArray.map((hotel, hotelIndex) => {
                    return (
                        <Card className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                            <Card.Body>
                                <Card.Title>{hotel.hotelName}</Card.Title>

                                <Card.Img style={{
                                    boxShadow: '2px 2px 2px #ccc',
                                    width: '200px', height: '200px'
                                }} variant="top"
                                    src={hotel.hotelimg} alt={hotel.hotelName} />
                                <Card.Text>
                                    location : {hotel.location}
                                </Card.Text>
                                <Card.Text>
                                    rate : {hotel.hotelRate}
                                </Card.Text>
                                <Card.Text>
                                    price : {`${hotel.price} JOD`}
                                </Card.Text>
                            </Card.Body>

                            <Button onClick={() => this.deleteHotel(hotelIndex)} variant="danger" >Delete</Button>
                            <Button onClick={() => this.updateHotel(hotelIndex)} variant="warning" >Update</Button>
                            <Button onClick={() => this.bookNow(hotel.hotelName, hotelIndex,hotel.price)} variant="primary">Book Now</Button>
                        </Card>
                    )
                })}




            </div>
        )
    }
}

export default withAuth0(Place);
