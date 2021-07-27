import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';


class UpdateHotel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Hotel</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form  onSubmit = {this.props.handleUpdate}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Name</Form.Label>
                                <Form.Control type="text" defaultValue = {this.props.hotelObj.hotelName} name="name" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Image</Form.Label>
                                <Form.Control type="text" defaultValue = {this.props.hotelObj.hotelimg}  name="img" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Rate</Form.Label>
                                <Form.Control type="text" defaultValue = {this.props.hotelObj.hotelRate}  name="rate" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Location</Form.Label>
                                <Form.Control type="text" defaultValue = {this.props.hotelObj.location}  name="location" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Price</Form.Label>
                                <Form.Control type="text" defaultValue = {this.props.hotelObj.price}  name="price" />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" type="submit" >
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default UpdateHotel
