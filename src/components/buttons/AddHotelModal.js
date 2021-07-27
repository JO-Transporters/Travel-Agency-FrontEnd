import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';


class AddHotelModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Adding Place</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form  onSubmit = {this.props.handleForm}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Hotel Name" name="name" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Hotel Image Link" name="img" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Rate</Form.Label>
                                <Form.Control type="text" placeholder="Enter Hotel Rate" name="rate" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Hotel Location" name="location" />
                            </Form.Group>
                           
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" type="submit" >
                                    Add
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default AddHotelModal
