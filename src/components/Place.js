import React, { Component } from 'react'

 class Place extends React.Component {
     constructor(props){
         super (props)
     }
    render() {
        return (
            <div>
                <h2>{this.props.place.name}</h2>
                {this.props.place.hotels.map(hotel=>{
                    return (
                        <>
                        <h3>{hotel.hotelName}</h3>
                        <img src = {hotel.hotelimg}></img>
                        </>
                    )
                   
                })}
            </div>
        )
    }
}

export default Place
