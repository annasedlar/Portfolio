import React, { Component } from 'react';
import './App.css';
import kitty from './placekitten.jpg';


const upd8edURL ='http://annasedlar.com/upd8ed';
import upd8edpic from './upd8edscreenshot.png';

class Projects extends Component{
  render(){
    return(
	      <div className="col-sm-6 col-md-12 row projects" id="projects">
	          <h1>This is the Projects Component</h1>
	              <div className="row">
	                <div className="col-xs-6">
	                  <a href={upd8edURL} className="thumbnail" target="_blank" style={{margin:'auto', padding:'10%'}}>
	                    <img src={upd8edpic} alt="up8ed_news-aggregator" />
	                  </a>
	                </div>
	                <div className="col-xs-6">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty2"/>
	                  </a>
	                </div>
	                <div className="col-xs-6">
	                  <a href="#" className="thumbnail">
	                    <img src={kitty} alt="kitty2"/>
	                  </a>
	                </div>
	                <div className="col-xs-6">
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