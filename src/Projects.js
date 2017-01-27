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
	                    <h1>Upd8ed - A News Aggregator</h1><p>Upd8ed is a news aggregator.</p>
	                    <p>This site is built solely on the front-end as a week-long sprint project with Connie, Mason, Paul at DigitalCrafts</p>
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