import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Home;