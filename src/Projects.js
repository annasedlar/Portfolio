import React, { Component } from 'react';
import './App.css';
import kitty from './placekitten.jpg';
import chatdraw from './chatdraw.png';
const chatdrawURL = 'http://annasedlar.com/chatdraw';


const upd8edURL ='http://annasedlar.com/upd8ed';
import upd8edpic from './tv1.png';

class Projects extends Component{
  render(){
    return(
	      <div className="col-sm-12 row projects" id="projects">
	      <div id="projects-title">
	          <h2>Projects</h2>
	      </div>
        <div className="container col-xs-12 thumbnail">
            <div className="col-xs-6">
              <a href={upd8edURL} target="_blank" style={{margin:'auto', padding:'10%'}}>
                <img src={upd8edpic} alt="up8ed_news-aggregator"/>
                <h1>Upd8ed</h1>
                <p><a href="https://github.com/mason0958/News-Aggregator" target="_blank">See code on Github</a> || Click anywhere for live demo</p>
               </a>
            </div>
            <div className="col-xs-6">
                <h1>Upd8ed is a news aggregator.</h1>
                <p>Get all the news from multiple sources on one site!</p>
                <p>This site is built solely on the front-end as a week-long sprint project with Connie, Mason, Paul at <a href="http://digitalcrafts.com" target="_blank">DigitalCrafts</a>.</p>
                <p> (P.S. we won "Best Overall"!)</p>
                <p>We are working to implement a reddit-style upvote/downvote component on the back-end.</p>
            </div>
        </div>
        <div className="container col-xs-12 thumbnail">
            <div className="col-xs-6">
              <a href={chatdrawURL} target="_blank" style={{margin:'auto', padding:'10%'}}>
                <img src={chatdraw} alt="chatdraw"/>
                <h1>Chat-Draw</h1>
                <p><a href="https://github.com/annasedlar/Chat-Draw" target="_blank">See code on Github</a> || Click anywhere for live demo</p>
               </a>
            </div>
            <div className="col-xs-6">
                <h1>Chat-Draw</h1>
                <p>A real-time chat/drawing application built using the HTML5 canvas element, websockets (socket.io) and Node.js</p>
            </div>
        </div> 
        <div className="row col-xs-12 thumbnail">
            <div className="col-xs-6">
              <a href="#">
                <img src={kitty} alt="kitty2"/>
              </a>
            </div>
            <div className="col-xs-6">
              <a href="#">
               <p>This is where I'd explain the kitten project</p>
              </a>
            </div>
       </div>                       
	 </div>
    )
  }
}

export default Projects;