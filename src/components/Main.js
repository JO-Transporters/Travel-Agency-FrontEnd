import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';
import AddPlaceModal from './buttons/AddPlaceModal';
import UpdateForm from './buttons/UpdateForm';
import './Main.css'

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

        let placesData = await axios.get('http://localhost:3001/places')

        await this.setState({
            placesArray: placesData.data,
        })


    }


    // showAdminAccess =()=>{
    //     const { user, isAuthenticated } = this.props.auth0;
    //     if (isAuthenticated){
    //         if (user.email == 'ibrahimkuderat@gmail.com') {
    //             this.setState({
    //                 adminAccess: true
    //             })
    //         }

    //     }

    // }

    addPlace = async () => {
        await this.setState({
            addPlace: true
        })
    }

    handleClose = async () => {
        await this.setState({
            addPlace: false,
            showUpdate: false,
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.setState({
            addPlace: false
        })

        let placeObj = {
            name: event.target.name.value,
            img: event.target.img.value,
        }

        let placeData = await axios.post('http://localhost:3001/add', placeObj)

        await this.setState({
            placesArray: placeData.data
        })
    }

    deletePlace = async (index) => {

        let placeData = await axios.delete(`http://localhost:3001/delete/${index}`)

        await this.setState({
            placesArray: placeData.data
        })
    }

    updateFormShow = async (index) => {
        let updatedObj = {
            name: this.state.placesArray[index].name,
            img: this.state.placesArray[index].img
        }

        await this.setState({
            showUpdate: true,
            index: index,
            updatedObj: updatedObj
        })
    }

    updatePlace = async (event) => {
        event.preventDefault();

        let updateInfo = {
            name: event.target.name.value,
            img: event.target.img.value
        }

        let placeData = await axios.put(`http://localhost:3001/update/${this.state.index}`, updateInfo)

        await this.setState({
            placesArray: placeData.data,
            showUpdate: false,
            updatedObj: {},
        })
    }
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>

                {/* {this.state.adminAccess &&
                    <Button variant="danger" >Delete</Button>

                } */}

                <Button onClick={this.addPlace} variant="primary">Add Place</Button>

                <AddPlaceModal show={this.state.addPlace} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />

                <UpdateForm show={this.state.showUpdate} handleClose={this.handleClose} updatedObj={this.state.updatedObj} updatePlace={this.updatePlace} />


                <div className="cardContainer">
                    {this.state.placesArray.map((place, index) => {
                        return (
                            <Card className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                                <Card.Body>
                                    <Card.Title>{place.name}</Card.Title>
                                    <Card.Img style={{ boxShadow: '2px 2px 2px #ccc', width: '200px', height: '200px' }} variant="top" src={place.img} alt={place.name} onClick={() => this.props.selectedPlace(place, index)} />
                                </Card.Body>

                                <Button variant="danger" onClick={() => { this.deletePlace(index) }}>Delete</Button>
                                <Button variant="warning" onClick={() => { this.updateFormShow(index) }} >Update</Button>
                            </Card>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default withAuth0(Main)
