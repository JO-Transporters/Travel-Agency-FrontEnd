import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class PlaceSlides extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 "
                            src={this.props.slideshowimg[0]}
                            alt="First slide"
                            height='500'
                        />
                        {/* <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }} >
                            <h3 >Aqaba Jordan</h3>
                            <p >Is the only coastal city in Jordan and the largest and most populous city on the Gulf of Aqaba.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={this.props.slideshowimg[1]}
                            alt="Second slide"
                            height='500'
                            object-fit='cover'
                        />
                        {/* <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <h3>Petra Jordan</h3>
                            <p>One of the 7 New Wonders of the World</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={this.props.slideshowimg[2]}
                            alt="Third slide"
                            height='500'
                        />
                        {/* <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                            <h3>Wadi Rum Jordan</h3>
                            <p> Known also as the Valley of the Moon (Wādī al-Qamar), is a valley cut into the sandstone and granite rock in southern Jordan 60 km (37 mi) to the east of Aqaba; it is the largest wadi in Jordan.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default PlaceSlides
