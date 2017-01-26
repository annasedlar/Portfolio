import React, { Component } from 'react';
import './App.css';
import { IndexLink, Link } from 'react-router';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor:"#00FFFF", marginBottom:''}}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" style={{fontFamily:"Zapfino", marginTop:10, marginLeft:20, color:"darkgrey"}}>Anna Sedlar</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/skills" activeClassName="active">Skills</Link></li>
                        <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

