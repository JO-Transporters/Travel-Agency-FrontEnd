import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';


class UpdateBook extends React.Component {

constructor(props){
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
                        <Form onSubmit = {this.props.handleUpdate}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hotel Name : {this.props.bookInfo.hotelName}</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Kids Number </Form.Label>
                                <Form.Control type="number" defaultValue = {this.props.bookInfo.kidsNum} name="kids" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Rooms Number</Form.Label>
                                <Form.Control type="number" defaultValue = {this.props.bookInfo.roomsNum} name="room" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>CheckIn Date</Form.Label>
                                <Form.Control type="date" defaultValue = {this.props.bookInfo.checkInDate} name="in" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <Form.Label>CheckOut Date</Form.Label>
                                <Form.Control type="date" defaultValue = {this.props.bookInfo.checkOutDate} name="out" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <Form.Label>Visitors Number</Form.Label>
                                <Form.Control type="number" defaultValue = {this.props.bookInfo.visitorsNum} name="visit" />
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

export default UpdateBook
