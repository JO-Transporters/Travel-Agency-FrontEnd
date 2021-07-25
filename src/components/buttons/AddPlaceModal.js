import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';


class AddPlaceModal extends React.Component {
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
                        <Form onSubmit={this.props.handleSubmit} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Place Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Place Name" name="name" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Place Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Place Image Link" name="img" />
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

export default AddPlaceModal
