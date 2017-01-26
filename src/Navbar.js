import React, { Component } from 'react';
import './App.css';
import { IndexLink, Link } from 'react-router';

import fb from './sm-icons/facebook.png';
import li from './sm-icons/linkedin.png';
import git from './sm-icons/github.png';
import mail from './sm-icons/mail.png';
import tw from './sm-icons/twitter.png';


class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top mynav">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" style={{fontFamily:"Zapfino", marginTop:10, color:"white", textShadow:"2px 2px darkgrey"}}>Anna Sedlar</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" className="darker_bg" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/about" className="darker_bg" activeClassName="active">About</Link></li>
                        <li><Link to="/skills" className="darker_bg" activeClassName="active">Skills</Link></li>
                        <li><Link to="/projects" className="darker_bg" activeClassName="active">Projects</Link></li>
                    </ul>
                    <ul className='nav navbar-nav' style={{float:'right'}}>
                        <li><img className='sm_icons' src={li} alt='linkedin' /></li>
                        <li><img className='sm_icons' src={git} alt='github' /></li>
                        <li><img className='sm_icons' src={tw} alt='twitter' /></li>
                        <li><img className='sm_icons' src={fb} alt='facebook' /></li>
                        <li><img className='sm_icons' src={mail} alt='email_me' /></li>
                    </ul>
                </div>
            </nav>
        )
    }
}







export default Navbar;

