import React, { Component } from 'react';
import './App.css';
import amazonwebservices from 'devicon';
import UMheader from './UMheader.png';
import dc from './dc.png';


class Skills extends Component{
  render(){
    return(
      <div className="col-sm-6 col-md-12 row skills">
      	<div className="corners">
      	<h1>Education</h1>
      		<div><h2>Tech Skills</h2>
      			<i className="devicon-amazonwebservices-plain-wordmark colored"></i>
      			<i className="devicon-bootstrap-plain-wordmark colored"></i>
      			<i className="devicon-chrome-plain-wordmark colored"></i>
      			<i className="devicon-css3-plain-wordmark colored"></i>
      			<i className="devicon-git-plain-wordmark colored"></i>
      			<i className="devicon-github-plain-wordmark colored"></i>
      		</div>
      		<div>
      			<i className="devicon-html5-plain-wordmark colored"></i>
      			<i className="devicon-javascript-plain-wordmark colored"></i>
      			<i className="devicon-jquery-plain-wordmark colored"></i>
      			<i className="devicon-mongodb-plain-wordmark colored"></i>
      			<i className="devicon-nodejs-plain-wordmark colored"></i>
      			<i className="devicon-python-plain-wordmark colored"></i>
      			<i className="devicon-react-original-wordmark colored"></i>
      			<i className="devicon-sass-original colored"></i>
      			<i className="devicon-sourcetree-plain-wordmark colored"></i>
      		</div>
      		<div>
      			<img src={dc} alt="become_a_builder_of_things" style={{width:300, height:130, maxWidth:'100%'}} />
      			<h3>DigitalCrafts</h3>
      			<p>DigitalCrafts is a top-rated full stack web and software development immersive program in Atlanta covering the most relevant web technologies and best-practice methodologies to build fully functional applications.
      			 This 16 week program covers HTML, CSS, Bootstrap, Javascript, React.js Node.js, MongoDB and Python, to prepared students to work as Full Stack Developers and Software Engineers.</p>
      			<img src={UMheader} alt="Go Blue" style={{width:400, height:60, maxWidth:'100%'}} />
      			<h3>University of Michigan</h3>
		      		<p>I have a best skillz. Theyre yuuuuuge. You know it, I know it, everybody knows it.</p>
		    </div>
      	</div>
      </div>
    )
  }
}


export default Skills;
