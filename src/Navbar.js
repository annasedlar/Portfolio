import React, { Component } from 'react';
import './App.css';
import { IndexLink, Link } from 'react-router';

import fb from './sm-icons/facebook.png';
import li from './sm-icons/linkedin.png';
import git from './sm-icons/github.png';
import mail from './sm-icons/mail.png';
import tw from './sm-icons/twitter.png';
import {Modal, NavBar, ButtonDropdown} from 'simple-react-bootstrap'

// FIX COLLAPSE BUTTON
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

{/*class Navbar extends Component{
    render(){
        return(
            <NavBar>
                <NavBar.Header>
                    <NavBar.Brand>
                        <a style={{ cursor: 'pointer' }}>Anna Sedlar</a>
                    </NavBar.Brand>
                    <NavBar.Toggle />
                </NavBar.Header>
                <NavBar.Nav>
                    <NavBar.Item className="class-on-item">Link 1</NavBar.Item>
                    <NavBar.Item disabled={true}>Link 2</NavBar.Item>
                    <NavBar.Item active={true} href="http://www.google.com">Link 3</NavBar.Item>
                    <NavBar.Dropdown toggleClassName="pointer-cursor" style={{ color: 'red' }} text="Sub menu">
                        <NavBar.Item>Sub option a</NavBar.Item>
                        <NavBar.Item href="#foo">Sub option b</NavBar.Item>
                        <NavBar.ItemDivider />
                        <NavBar.Item>Sub option c</NavBar.Item>
                    </NavBar.Dropdown>
                    <NavBar.Dropdown disabled={true} text="Sub menu">
                        <NavBar.Item>Sub option a</NavBar.Item>
                        <NavBar.Item>Sub option b</NavBar.Item>
                        <NavBar.Item>Sub option c</NavBar.Item>
                    </NavBar.Dropdown>
                </NavBar.Nav>
                <NavBar.Header>
                    <NavBar.Brand>
                        <a style={{ cursor: 'pointer' }}>Second Header</a>
                    </NavBar.Brand>
                    <NavBar.Toggle />
                </NavBar.Header>
                <NavBar.Form className="pull-left">
                    <div className="form-group">
                        <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn default">Search</button>
                                </span>
                            <input className="form-control" placeholder="Quick title search" />
                        </div>
                    </div>
                </NavBar.Form>
            </NavBar>
        )}}*/}


export default Navbar;

