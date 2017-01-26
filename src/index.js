import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './CompassSass.css';
import './App.css';
import App from './App.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Navbar from './Navbar';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={App} />
			<Route path="about" component={About} />
			<Route path="skills" component={Skills} />
			<Route path="projects" component={Projects} />
		</Route>
	</Router>,	
  document.getElementById('root')
);
