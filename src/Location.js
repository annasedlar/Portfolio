import React, { Component } from 'react';
import './App.css';
// import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
// import SimpleMap from './SimpleMap'


// const src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d188836.153250909!2d-84.34425951662186!3d33.74410336121713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1485457561515";     

class Location extends Component{
  render(){
    return(
      <div>
        <div className="map-foreground col-xs-hidden col-sm-12 row" id="location">
         <div className="map_background col-xs-hidden col-sm-12 row">
         </div>
        </div>
        <div className="col-xs-12 footer row">
          <p>This is the footer. Here goes: social media links, email link, github, projects... </p>
        </div>
      </div>
    )
  }
}

export default Location;