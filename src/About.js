import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';




class About extends Component{
	toSpanish(){
		$(".english").mouseenter(function() {
		    $(this).html("<p>Hola! Cómo está? Soy Anna - una desarrollador. Hago páginas del web.</p><p>Soy amable - quiero ser tu amiga. Bueno?</p>");
		}).mouseleave(function() {
		     $(this).html("<p>Hi! I'm Anna. I make web apps. Let's be friends? </p>")});
	}
	componentDidMount() {
		this.toSpanish();
	}	
  	render(){
	    return(
	      <div className="col-sm-12 about" id="about">
	      	<div className="aboutcenter">
		      	<h1>Anna Sedlar</h1>
		      	<p className="english">Hi! I'm Anna. I make web apps. Let's be friends? </p>
		      </div>
	      </div>
	    )
  }
}

export default About;