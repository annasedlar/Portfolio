import React, { Component } from 'react';
import './App.css';
import kitty from './placekitten.jpg';
import chatdraw from './chatdraw.png';
import whattowatch from './whattowatch.png';
const whatToWatchURL = 'http://annasedlar.com/whattowatch/';
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
                <h1>Chat-Draw is a Chat Room</h1>
                <p>A real-time chat/drawing application built using the HTML5 canvas element, websockets (socket.io) and Node.js</p>
            </div>
        </div> 
        <div className="container col-xs-12 thumbnail">
            <div className="col-xs-6">
              <a href={whatToWatchURL} target="_blank" style={{margin:'auto', padding:'10%'}}>
                <img src={whattowatch} alt="whattowatch"/>
                <h1>What To Watch</h1>
                <p><a href="https://github.com/annasedlar/What_to_watch" target="_blank">See code on Github</a> || Click anywhere for live demo</p>
               </a>
            </div>
            <div className="col-xs-6">
                <h1>What To Watch is a Movie App</h1>
                <p>This app pulls live data to see currently playing movies, filter movies by genre, and search a movie based on movie or actor/ess name. Built with the TMDb (The Movie Database) API</p>
                <p>These link to the original project. Since then, another 4 iterations have been written using various technologies including Express, React, and Mongo. Eventually they will all be pulled together into one.</p>
            </div>
        </div>                 
	 </div>
    )
  }
}

export default Projects;