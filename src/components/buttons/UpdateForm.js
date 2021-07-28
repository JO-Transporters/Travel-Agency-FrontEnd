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
                            <Form.Group className="mb-3" >
                                <Form.Label>First Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.slideShow1}  name="img1" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Second Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.slideShow2}  name="img2" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Thired Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.slideShow3}  name="img3" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.lon}  name="lon" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Latitude</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.updatedObj.lat}  name="lat" />
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
