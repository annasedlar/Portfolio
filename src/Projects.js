import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import kitty from './placekitten.jpg';


class Projects extends Component{
  render(){
    return(
	      <div className="col-sm-6 row projects">
	          <h1>This is the Projects Component</h1>
	              <div className="row">
	                <div className="col-xs-6 col-md-3">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty1"/>
	                  </a>
	                </div>
	                <div className="col-xs-6 col-md-3">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty2"/>
	                  </a>
	                </div>
	                <div className="col-xs-6 col-md-3">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty2"/>
	                  </a>
	                </div>
	                <div className="col-xs-6 col-md-3">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty2"/>
	                  </a>
	                </div>
	              </div>                       
	   	</div>
    )
  }
}

export default Projects;