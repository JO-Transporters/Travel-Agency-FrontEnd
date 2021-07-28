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
import './Place.css'



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
            price: "",
            bookedData: [],
            alert: false,
            adminAccess: false,


        }
    }

    componentDidMount = async () => {
        const { user, isAuthenticated } = this.props.auth0;
        let adminAuth;

        if (isAuthenticated) {
            if (user.email == 'ibrahimkuderat@gmail.com') {
                adminAuth = true;

            }
        }

        let userOnLS = JSON.parse(localStorage.getItem("Hotels"));

        if (userOnLS !== undefined && userOnLS !== null) {
            this.setState({
                hotelsArray: userOnLS[this.props.index].hotels,
                adminAccess: adminAuth,

            })

        }
        else {
            let placesData = await axios.get('https://jordan-black-iris.herokuapp.com/places')
            let data = JSON.stringify(placesData.data);
            localStorage.setItem("Hotels", data);
            this.setState({
                hotelsArray: placesData.data[this.props.index].hotels,
                adminAccess: adminAuth,

            })

        }



        // let placesData = await axios.get('http://localhost:3001/places')

        // this.setState({
        //     hotelsArray: placesData.data[this.props.index].hotels,
        //     adminAccess: adminAuth,

        // })


    }

    bookNow = async (hotelName, index, price) => {


        this.setState({
            hotelName: hotelName,
            price: price,
            showBookModal: true,
            alert: true,

        })
    }

    setShow = async () => {
        this.setState({
            alert: false
        })
    }

    addHotel = async () => {
        this.setState({
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
            price: event.target.price.value

        }
        this.setState({
            showAddHotel: false,
        })
        let hotelData = await axios.post(`https://jordan-black-iris.herokuapp.com/addHotel/${this.props.index}`, hotelObj);

        localStorage.removeItem("Hotels");
        let data = JSON.stringify(hotelData.data);
        localStorage.setItem("Hotels", data);

        this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,
        })



    }

    handleClose = async () => {
        this.setState({
            showAddHotel: false,
            showHotelUpdate: false,
            showBookModal: false

        })
    }


    deleteHotel = async (hotelIndex) => {

        let hotelData = await axios.delete(`https://jordan-black-iris.herokuapp.com/deletehotel/${this.props.index}/${hotelIndex}`)
        localStorage.removeItem("Hotels");
        let data = JSON.stringify(hotelData.data);
        localStorage.setItem("Hotels", data);
        this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,

        })

    }

    updateHotel = async (hotelIndex) => {
        this.setState({
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
            price: event.target.price.value,

        }
        this.setState({
            showHotelUpdate: false,
        })
        let hotelData = await axios.put(`https://jordan-black-iris.herokuapp.com/updatehotel/${this.props.index}/${this.state.hotelIndex}`, updatedHotelObj)

        localStorage.removeItem("Hotels");
        let data = JSON.stringify(hotelData.data);
        localStorage.setItem("Hotels", data);

        this.setState({

            hotelsArray: hotelData.data[this.props.index].hotels,


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

        let userBookInfo = await axios.post(`https://jordan-black-iris.herokuapp.com/addnewbook`, bookedObj);

        this.setState({
            showBookModal: false
        })

    }

    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (

            <div>


                <PlaceSlides slideshowimg={this.props.place.slideShow} />



                {this.state.adminAccess &&
                    <div style={{ width: '100%' }}>
                        <Button onClick={this.addHotel} variant="primary">Add Hotel</Button>

                    </div>
                }

                <AddHotelModal show={this.state.showAddHotel}
                    handleClose={this.handleClose}
                    handleForm={this.handleForm} />

                <UpdateHotel show={this.state.showHotelUpdate}
                    handleClose={this.handleClose}
                    hotelObj={this.state.hotelObj}
                    handleUpdate={this.handleUpdate} />


                {this.state.alert && <>{isAuthenticated ? <AddBookModal show={this.state.showBookModal} handleClose={this.handleClose} hotelName={this.state.hotelName} handleForm={this.handelBookForm} /> : <LoginAlert setShow={this.setShow} />}</>}


                <h2 style={{ backgroundColor: '#05445E', color: '#D4F1F4', textAlign: 'center' }}>{this.props.place.name}</h2>


                <div className='cardcontainer'>

                    {this.state.hotelsArray.map((hotel, hotelIndex) => {
                        let star = [];
                        let starlength = Number(hotel.hotelRate);
                        {
                            for (let index = 0; index < starlength; index++) {

                                star.push('⭐')
                            }
                        }

                        return (
                            // <Card className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                            //     <Card.Body>
                            //         <Card.Title>{hotel.hotelName}</Card.Title>

                            //         <Card.Img style={{
                            //             boxShadow: '2px 2px 2px #ccc',
                            //             width: '200px', height: '200px'
                            //         }} variant="top"
                            //             src={hotel.hotelimg} alt={hotel.hotelName} />
                            //         <Card.Text>
                            //             location : {hotel.location}
                            //         </Card.Text>
                            //         <Card.Text>
                            //             {star.map(star=>{
                            //                 return star
                            //             })
                            //             }
                            //         </Card.Text>
                            //         <Card.Text>
                            //             price : {`${hotel.price} JOD`}
                            //         </Card.Text>
                            //     </Card.Body>

                            //     {this.state.adminAccess &&
                            //         <Card.Footer>
                            //             <Button onClick={() => this.deleteHotel(hotelIndex)} variant="danger" >Delete</Button>
                            //             <Button onClick={() => this.updateHotel(hotelIndex)} variant="warning" >Update</Button>
                            //         </Card.Footer>

                            //     }


                            //     <Button onClick={() => this.bookNow(hotel.hotelName, hotelIndex, hotel.price)} variant="primary">Book Now</Button>
                            // </Card>

                            <Card className="placecard"
                            >
                                <div className="imgStyle" >
                                    <Card.Img variant="top"
                                        src={hotel.hotelimg} alt={hotel.hotelName} />
                                </div>

                                <div className="bodyStyle" >
                                    <Card.Body>
                                        <Card.Title>{hotel.hotelName}</Card.Title>

                                        <Card.Text>
                                            location : {hotel.location}
                                        </Card.Text>
                                        <Card.Text>

                                            {star.map(star => {
                                                return star
                                            })}

                                        </Card.Text>
                                        <Card.Text>
                                            price : {`${hotel.price} JOD`}
                                        </Card.Text>
                                    </Card.Body>



                                </div>
                                <Button className='booknow' onClick={() => this.bookNow(hotel.hotelName, hotelIndex, hotel.price)} variant="primary">Book Now</Button>
                                {this.state.adminAccess &&
                                    <Card.Footer className='adminbutton'>
                                        <Button onClick={() => this.updateHotel(hotelIndex)} style={{  backgroundColor: '#05445E', color:'#D4F1F4' }}>Update</Button>
                                        <Button onClick={() => this.deleteHotel(hotelIndex)} variant="danger">Delete</Button>
                                    </Card.Footer>
                                }


                            </Card>








                        )
                    })}

                </div>

                <img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.3fb65df48ea9b1418d02d4dc6b9a89f1&center=${this.props.place.center[0]},${this.props.place.center[1]}&zoom=14`} alt="img" />

            </div>
        )
    }
}

export default withAuth0(Place);
