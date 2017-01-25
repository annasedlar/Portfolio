import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Front from './Front';



class Aboutme extends Component{
  render(){
    return(
      <div className="col-sm-6 About">This is the About Me Component</div>)
  }
}

class Projects extends Component{
  render(){
    return(
      <div className="col-sm-6 Projects">This is the Projects Component</div>
      )
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Front />
        <Aboutme />
        <Projects />
      </div>
    );
  }
}

export default Home;
