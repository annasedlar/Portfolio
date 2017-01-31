import React, { Component } from 'react';
import './App.css';
// import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
// import SimpleMap from './SimpleMap'


// const src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d188836.153250909!2d-84.34425951662186!3d33.74410336121713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1485457561515";     

class ContactMe extends Component{
  render(){
    return(
      <div id="ContactMe">
         <div className="col-sm-10 col-sm-offset-1 contact_box">
            <h1>Contact Me</h1>
            <p>I love meeting new people and would love to talk about your web, app, or tech needs. Here's how you can reach out to me:</p>
            <div style={{height:400, width:400, border:'1px solid black', margin:"auto"}}><h2>Insert a Form</h2>
            </div>
            <h3>insert social media icons, resume</h3>
         </div>


        <div className="col-xs-12 footer row">
          <p>This is the footer. Here goes: social media links, email link, github, projects... </p>
        </div>
      </div>
    )
  }
}

export default ContactMe;