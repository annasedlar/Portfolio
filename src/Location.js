import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Map from 'google-maps-react';

var apiURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl1YwZ0hzIMNacFKUQ9v4VQ9ZWpAE0Uu0"


class Map extends Component{
  initMap(){
        var atlanta = {lat: 33.74903, lng: 84.3880};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: atlanta
        });
        var marker = new google.maps.Marker({
          position: atlanta,
          map: map
        });
  }
  render(){
    return(
      initMap()
    )
  }
}





class Location extends Component{
  render(){
    return(
      <div>
        <div className="col-sm-12 row map_background">
          <Map google={window.google} />
        </div>
        <div className="col-xs-12 footer row">
          <p>This is the footer. Here goes: social media links, email link, github, projects... </p>
        </div>
      </div>
    )
  }
}

export default Location;