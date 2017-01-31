import React, { Component } from 'react';
import './App.css';
import { IndexLink, Link } from 'react-router';

import fb from './sm-icons/facebook.png';
import li from './sm-icons/linkedin.png';
import git from './sm-icons/github.png';
import mail from './sm-icons/mail.png';
import tw from './sm-icons/twitter.png';


//FIX COLLAPSE BUTTON

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top mynav" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span> 
                      </button>
                        <a className="navbar-brand signature_on_heading menu-item" href="#about" >Anna Sedlar</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="menu-item"><a href="#about" activeClassName="active">About</a></li>
                            <li className="menu-item"><a href="#corners" activeClassName="active">Skills</a></li>
                            <li className="menu-item"><a href="#projects" activeClassName="active">Projects</a></li>
                            <li className="menu-item"><a href="#ContactMe" activeClassName="active">Contact Me</a></li>
                        </ul>
                        <ul className='nav navbar-nav col-xs-hidden navbar-right'>
                            <li><a href="https://www.linkedin.com/in/annasedlar" target="_blank"><img src={li} className='sm_icons' alt='linkedin' /></a></li>
                            <li><a href="https://github.com/annasedlar" target="_blank"><img src={git} className='sm_icons' alt='github' /></a></li>
                            <li><a href="https://twitter.com/annasedlar" target="_blank"><img src={tw} className='sm_icons' alt='twitter' /></a></li>
                            <li><a href="https://www.facebook.com/annasedlar" target="_blank"><img src={fb} className='sm_icons' alt='facebook'/></a></li>
                            <li><a href="mailto:annasedlar@gmail.com" target="_blank"><img src={mail} className='sm_icons' alt='email_me' /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}





export default Navbar;

