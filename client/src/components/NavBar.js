import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <span className="navbar-brand logo">CampusCart</span>
            </nav>
        )
    }
}

export default NavBar;