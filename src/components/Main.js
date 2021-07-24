import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';

 class Main extends React.Component {

    constructor (props){
        super(props) 
        this.state = {
            placesArray : [],
        }

    }

    componentDidMount = async () => {
        
        let placesData = await axios.get ('http://localhost:3001/places')

        await this.setState({
            placesArray : placesData.data,
        })
    
      }

    

    render() {
        return (
            <div>
                {this.state.placesArray.map ((place,index) =>{
                    return (
                        <Card onClick={()=>this.props.selectedPlace(place,index)} className="place" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                          <Card.Title>{place.name}</Card.Title>
                          <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={place.img} alt={place.name} />
      
                          {/* <Card.Text>
                            {book.description}
                          </Card.Text>
                          <Card.Text>
                            {book.status}
                          </Card.Text> */}
                        </Card.Body>
                        {/* <Button variant="danger" onClick ={()=> this.deleteBook(index)}>Delete</Button> */}
                      </Card>
                    )
                })}
            </div>
        )
    }
}

export default Main
