import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class HomeSlides extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 "
                            src="https://alnasnews.com.jo/online/wp-content/uploads/2021/07/aqabaa_4_1.jpg"
                            alt="First slide"
                            height='500'
                        />
                        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,.8)'}} > 
                            <h3 >Aqaba Jordan</h3>
                            <p >Is the only coastal city in Jordan and the largest and most populous city on the Gulf of Aqaba.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstepintojordan.com%2Fwp-content%2Fuploads%2F2021%2F01%2FPetra-by-Night-Header.jpg"
                            alt="Second slide"
                            height='500'
                            object-fit='cover'
                        />
                        <Carousel.Caption  style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                            <h3>Petra Jordan</h3>
                            <p>One of the 7 New Wonders of the World</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.natgeofe.com/n/5d696887-5559-4fd9-909d-bb84d257eb85/trucks-wadi-rum-jordan.jpg?w=636&h=424"
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                        <h3>Wadi Rum Jordan</h3>
                            <p> Known also as the Valley of the Moon (Wādī al-Qamar), is a valley cut into the sandstone and granite rock in southern Jordan 60 km (37 mi) to the east of Aqaba; it is the largest wadi in Jordan.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1597424868084-872f06020714?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVyYXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,.8)'}}> 
                            <h3>Jerash</h3>
                            <p>The city is the administrative center of the Jerash Governorate, and has a population of 50,745 as of 2015. It is located 48 kilometres (30 mi) north of the capital city Amman.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                  
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.ayasshotel.com/medias/article/big/176/dead-sea.jpg"
                            alt="Third slide"
                            height='500'
                        />
                        <Carousel.Caption style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                            <h3>Dead sea</h3>
                            <p>Is a salt lake bordered by Jordan to the east and Israel and the West Bank to the west. It lies in the Jordan Rift Valley, and its main tributary is the Jordan River.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomeSlides;