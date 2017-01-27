import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './CompassSass.css';
import './App.css';
import Home from './App.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Navbar from './Navbar.js';
import Location from './Location.js';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home} >
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/skills" component={Skills} />
			<Route path="/projects" component={Projects} />
			<Route path="/location" component={Location} />
		</Route>
	</Router>,	
  document.getElementById('root')
);