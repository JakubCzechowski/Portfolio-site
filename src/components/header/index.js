import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="header-container">
                    <NavLink className="logo" to="/"><embed src="/assets/logo.svg" alt="logo" /></NavLink>
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/work">My work</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}