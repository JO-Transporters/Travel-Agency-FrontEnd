import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';

class AddBookModal extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Book Your Room</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.handleForm}>
                            <Form.Group className="mb-3" >
                                <Form.Label>{this.props.hotelName}</Form.Label>

                            </Form.Group>
                            {/* // hotelName, checkInDate, checkOutDate, visitorsNum, roomsNum, kidsNum, userName, userEmail, phoneNumber */}

                            <Form.Group className="mb-3" >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Phone Number" name="phoneNumber" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Check In Date</Form.Label>
                                <Form.Control type="date" placeholder="current date" name="checkInDate" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Check Out Date</Form.Label>
                                <Form.Control type="date" placeholder="current date " name="checkOutDate" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>How Many Visitors?</Form.Label>
                                <Form.Control type="number" placeholder="Enter visitors Number" name="visitorsNum" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>How Many Rooms?</Form.Label>
                                <Form.Control type="number" placeholder="Enter Rooms Number" name="roomsNum" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>How Many Kids?</Form.Label>
                                <Form.Control type="number" placeholder="Enter Kids Number" name="kidsNum" />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" type="submit" >
                                    Book!
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default AddBookModal
