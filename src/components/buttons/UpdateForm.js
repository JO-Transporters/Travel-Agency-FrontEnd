import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap/';


class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Place</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.updatePlace} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Place Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.name} name="name" />
                            </Form.Group>


                            <Form.Group className="mb-3" >
                                <Form.Label>Place Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.img} name="img" />
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

export default UpdateForm
