import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Front from './Front';
import Skills from './Skills';
import kitty from './placekitten.jpg'


class Aboutme extends Component{
  render(){
    return(
      <div className="col-sm-6 row about">me me me me me me me</div>)
  }
}

class Projects extends Component{
  render(){
    return(
      <div className="col-sm-6 row projects">
          <h1>This is the Projects Component</h1>
              <div className="row">
                <div className="col-xs-6 col-md-4">
                  <a href="#" className="thumbnail">
                    <img src={kitty} alt="kitty1"/>
                  </a>
                </div>
                <div className="col-xs-6 col-md-4">
                  <a href="#" className="thumbnail">
                    <img src={kitty} alt="kitty2"/>
                  </a>
                </div>
                <div className="col-xs-6 col-md-4">
                  <a href="#" className="thumbnail">
                    <img src={kitty} alt="kitty2"/>
                  </a>
                </div>
              </div>                       
      </div>
      )
  }
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Front />
        <Aboutme />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Home;
