import React, { Component } from 'react';
import './App.css';
import fb from './sm-icons/facebook.png';
import li from './sm-icons/linkedin.png';
import git from './sm-icons/github.png';
import mail from './sm-icons/mail.png';
import tw from './sm-icons/twitter.png';
import {Modal, NavBar, ButtonDropdown} from 'simple-react-bootstrap'
// import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
// import SimpleMap from './SimpleMap'


// const src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d188836.153250909!2d-84.34425951662186!3d33.74410336121713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1485457561515";     

class ContactMe extends Component{
  render(){
    return(
      <div className="contactme" id="contactme">
         <div className="col-sm-10 col-sm-offset-1 contact_box">
            <h1>Contact Me</h1>
            <p>I love meeting new people and would love to talk about your web, app, or tech needs.</p>
            <p>Send me an email at annasedlar@gmail.com or find me on any of these platforms: </p>

         </div>
        <div className="col-sm-12 footer row">
          <div className="foot">
            
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe;
