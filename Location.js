// import React from "react";
// import { geolocated } from "react-geolocated";

// class Demo extends React.Component {
//     render() {
//         return !this.props.isGeolocationAvailable ? (
//             <div>Your browser does not support Geolocation</div>
//         ) : !this.props.isGeolocationEnabled ? (
//             <div>Geolocation is not enabled</div>
//         ) 
//         : this.props.coords ? (
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>latitude</td>
//                         <td>{this.props.coords.latitude}</td>
//                     </tr>
//                     <tr>
//                         <td>longitude</td>
//                         <td>{this.props.coords.longitude}</td>
//                     </tr>
              
                
//                 </tbody>
//             </table>
//         ) : (
//             <div>Getting the location data&hellip; </div>
//         );
//     }
// }

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(Demo);


import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : null,
      longitude : null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this)
  }

 getLocation()
 {
   if( navigator.geolocation)
   {
    navigator.geolocation.getCurrentPosition(this.getCoordinates) ;
   }
   else
   {
     alert("Coordinates not available");
   }
 }

 getCoordinates(position)
 {
  // console.log("Latitude is :", position.coords.latitude);
        this.setState({
          latitude :   position.coords.latitude,
           longitude : position.coords.longitude
      });
 }

  render() {
    return (
      <div>
        <h4>Using geolocation  API in React</h4>
        <button onClick={this.getLocation.bind(this)}>Get Location</button>
        <h3>
          {this.state.latitude}
        </h3>
        <h3>
          {this.state.longitude}
        </h3>
      </div>
    );
  }
}
export default Demo;