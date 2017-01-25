import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor:"#00FFFF"}}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" style={{fontFamily:"Zapfino", marginTop:10, marginLeft:20, color:"darkgrey"}}>Anna Sedlar</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li id="home"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

