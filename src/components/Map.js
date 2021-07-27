import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
  
  render() {
    return (
      <>
      <img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.3fb65df48ea9b1418d02d4dc6b9a89f1&center=32.551445,35.851479&zoom=15`} alt="irbid" />
      </>
    )
    }
}
export default Map;