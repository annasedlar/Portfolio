import React, { Component } from 'react';
import './App.css';

class Skills extends Component{
  render(){
    return(
      <div className="col-sm-6 row skills">
      	<div className="corners">
      		<h1>This is the skillz component</h1>
      		<br/>
      		<div>
      			<h2>Education</h2>
      			<p>DigitalCrafts</p>
      			<p>University of Michigan</p>
      		</div>
      		<p>I have a best skillz. They're yuuuuuge. You know it, I know it, everybody knows it.</p>
      	</div>
      </div>
    )
  }
}


export default Skills;
