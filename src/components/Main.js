import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';
import AddPlaceModal from './buttons/AddPlaceModal';
import UpdateForm from './buttons/UpdateForm';
import './Main.css'
import HomeSlides from './HomeSlides';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            placesArray: [],
            adminAccess: false,
            addPlace: false,
            showUpdate: false,
            index: 0,
            updatedObj: {}
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
        let placesData = await axios.get('http://localhost:3001/places')

       this.setState({

            placesArray: placesData.data,
            adminAccess: true,
        })



    }

    addPlace = async () => {
        this.setState({
            addPlace: true
        })
    }

    handleClose = async () => {
        this.setState({
            addPlace: false,
            showUpdate: false,
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            addPlace: false
        })
        let slideshow = [event.target.img1.value, event.target.img2.value, event.target.img3.value]

        let locCenter = [event.target.lat.value , event.target.lon.value]

        let placeObj = {
            name: event.target.name.value,
            img: event.target.img.value,
            slideShowimg: slideshow,
            center : locCenter

        }
        console.log(placeObj);
        let placeData = await axios.post('http://localhost:3001/add', placeObj)

        this.setState({
            placesArray: placeData.data
        })
    }

    deletePlace = async (index) => {

        let placeData = await axios.delete(`http://localhost:3001/delete/${index}`)

        this.setState({
            placesArray: placeData.data
        })
    }

    updateFormShow = async (index) => {
        let updatedObj = {
            name: this.state.placesArray[index].name,
            img: this.state.placesArray[index].img,
            slideShow1: this.state.placesArray[index].slideShow[0],
            slideShow2: this.state.placesArray[index].slideShow[1],
            slideShow3: this.state.placesArray[index].slideShow[2],
            lat : this.state.placesArray[index].center[0],
            lon : this.state.placesArray[index].center[1],



        }
        console.log(updatedObj);
        this.setState({
            showUpdate: true,
            index: index,
            updatedObj: updatedObj
        })
    }

    updatePlace = async (event) => {
        event.preventDefault();
        let slideshow = [event.target.img1.value, event.target.img2.value, event.target.img3.value]
        let locCenter = [event.target.lat.value , event.target.lon.value ]
        let updateInfo = {
            name: event.target.name.value,
            img: event.target.img.value,
            slideShowimg: slideshow,
            hotels: this.state.placesArray[this.state.index].hotels,
            center:locCenter,


        }
        

        let placeData = await axios.put(`http://localhost:3001/update/${this.state.index}`, updateInfo)

        this.setState({
            placesArray: placeData.data,
            showUpdate: false,
            updatedObj: {},
        })
    }
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
                <HomeSlides />
                {
                    this.state.adminAccess &&
                    <Button onClick={this.addPlace} variant="primary">Add Place</Button>


                }



                <AddPlaceModal show={this.state.addPlace} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />

                <UpdateForm show={this.state.showUpdate} handleClose={this.handleClose} updatedObj={this.state.updatedObj} updatePlace={this.updatePlace} />


                <div className="cardContainer">
                    {this.state.placesArray.map((place, index) => {
                        return (
                            <Card className="place" style={{ width: '18rem', backgroundColor: '#B1D4E0', boxShadow: '2px 2px 2px black' }} id="homeCard">

                                <Card.Body>
                                    <Card.Title id="homeCardTitle">{place.name}</Card.Title>
                                    <Card.Img style={{
                                        boxShadow: '2px 2px 2px #ccc',
                                        width: '250px', height: '200px'
                                    }}
                                        variant="top" src={place.img} alt={place.name}
                                        onClick={() => this.props.selectedPlace(place, index)} />
                                </Card.Body>
                                {
                                    this.state.adminAccess &&
                                    <Card.Footer>
                                    <Button variant="danger" onClick={() => { this.deletePlace(index) }}>Delete</Button>
                                    <Button variant="warning" onClick={() => { this.updateFormShow(index) }} >Update</Button>
                                    </Card.Footer>
                                }
                            </Card>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default withAuth0(Main)
