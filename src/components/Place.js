import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';
import AddHotelModal from './buttons/AddHotelModal';
import UpdateHotel from './buttons/UpdateHotel';


class Place extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddHotel: false,
            hotelsArray: [],
            showHotelUpdate : false,
            hotelIndex : 0,
            hotelObj : {}
        }
    }

    componentDidMount = async () => {

        let placesData = await axios.get('http://localhost:3001/places')

        await this.setState({
            hotelsArray: placesData.data[this.props.index].hotels,
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
            showHotelUpdate : false,

        })
    }


    deleteHotel = async (hotelIndex) =>{

        let hotelData = await axios.delete(`http://localhost:3001/deletehotel/${this.props.index}/${hotelIndex}`)

        await this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,

        })

    }

    updateHotel = async (hotelIndex) =>{
      await  this.setState({
            showHotelUpdate : true,
            hotelIndex : hotelIndex,
            hotelObj : this.state.hotelsArray[hotelIndex],
        })
    }

    handleUpdate = async (event) =>{
        event.preventDefault();

        let updatedHotelObj = {
            hotelName : event.target.name.value,
            hotelimg : event.target.img.value,
            hotelRate : event.target.rate.value,
            location : event.target.location.value,

        }

        let hotelData = await axios.put(`http://localhost:3001/updatehotel/${this.props.index}/${this.state.hotelIndex}`, updatedHotelObj)



        await this.setState({
            hotelsArray: hotelData.data[this.props.index].hotels,

            showHotelUpdate : false,
        })
    }

    render() {
        return (
            <div>

                <Button onClick={this.addHotel} variant="primary">Add Hotel</Button>

                <AddHotelModal show={this.state.showAddHotel}
                    handleClose={this.handleClose}
                    handleForm={this.handleForm} />

                    <UpdateHotel show ={this.state.showHotelUpdate}
                     handleClose={this.handleClose}
                     hotelObj = {this.state.hotelObj}
                     handleUpdate={this.handleUpdate}/>

                <h2>{this.props.place.name}</h2>


                {this.state.hotelsArray.map((hotel,hotelIndex) => {
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
                            </Card.Body>
                            
                            <Button onClick = {()=>this.deleteHotel(hotelIndex)} variant="danger" >Delete</Button>
                            <Button onClick = {()=>this.updateHotel(hotelIndex)} variant="warning" >Update</Button>
                        </Card>
                    )
                })}




            </div>
        )
    }
}

export default Place
