import React, { Component } from 'react';
import './App.css';
import amazonwebservices from 'devicon';
import UMheader from './UMheader.png';
import dc from './dc.png';


class Skills extends Component{
  render(){
    return(
    	<div className="col-sm-12" id="skillz" >
	      <div className="corners" >
	  		<h1>Core Tech Skills</h1>
	  		<h3>How the magic happens</h3>
	  		<div className="col-sm-12 row">
	  			<h4>What I've learned</h4>
				<i className="devicon-html5-plain-wordmark colored"></i>
				<i className="devicon-css3-plain-wordmark colored"></i>
				<i className="devicon-sass-original colored"></i>
	  			<i className="devicon-bootstrap-plain-wordmark colored"></i>
	  			<i className="devicon-chrome-plain-wordmark colored"></i>
	  			<i className="devicon-git-plain-wordmark colored"></i><br/>
	  			<i className="devicon-github-plain-wordmark colored"></i>
	  			<i className="devicon-sourcetree-plain-wordmark colored"></i>
	  			<i className="devicon-javascript-plain-wordmark colored"></i>
	  			<i className="devicon-jquery-plain-wordmark colored"></i>
	  			<i className="devicon-react-original-wordmark colored"></i>
	  		</div>
	  		<div className="col-sm-12">
	  			<h4>What I'm learning</h4>
	  			<i className="devicon-amazonwebservices-plain-wordmark colored"></i>
	  			<i className="devicon-mongodb-plain-wordmark colored"></i>
	  			<i className="devicon-nodejs-plain-wordmark colored"></i>
	  			<i className="devicon-python-plain-wordmark colored"></i><br/><br/>
	  		</div>
	  		<div className="col-sm-12 row"><h1>Education</h1><h4><br/></h4>
	  			<div className="col-xs-6">
		  			<img src={dc} alt="become_a_builder_of_things" style={{width:280, height:100, maxWidth:'100%'}} />
		  			<div className="row">
		  				<h3>DigitalCrafts</h3>
			  			<p>DigitalCrafts is a top-rated full stack web and software development immersive program in Atlanta covering the most relevant web technologies and best-practice methodologies to build fully functional applications.
			  			 This 16 week program covers HTML, CSS, Bootstrap, Javascript, React.js Node.js, MongoDB and Python, to prepare students to work as Full Stack Developers and Software Engineers.</p>
		  			</div>
		  		</div>
		  		<div className="col-xs-6">
		  			<img src={UMheader} alt="Go Blue" style={{width:400, height:60, maxWidth:'100%'}} />
		  			<div className="row">
		  				<h3>University of Michigan</h3>
			      		<p>I studied <a href="https://lsa.umich.edu/earth" target="_blank">Earth</a> and <a href="http://lsa.umich.edu/pite" target="_blank">Environmental Sciences</a>
			      		  at the University of Michigan focusing on the origin, evolution, and future of the Earth
			      		 while taking into account the complex interactions of humans and our environment. To understand these 
			      		 patterns and systems, I developed though my degree program a multidisciplinary and holistic perspective 
			      		towards the challenges our Earth, population, and climate faces. This degree integrates the methods 
			      		 and approaches of social sciences and humanities with a strong and broad foundation in natural and physical sciences.</p>
			    	</div>
		   		</div>
		  	</div>
	 	</div>
	</div>

    )
  }
}


export default Skills;
