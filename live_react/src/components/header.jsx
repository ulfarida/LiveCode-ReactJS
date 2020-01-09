import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Header extends Component {
    afterSignout = () => {
        store.setState({auth : false})
        this.props.history.push('/login')
    }

    render () {
        return (
             <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <ul className="list-unstyled home-header-nav__list">
                                <li className="logo"><img src={logo} alt=""/></li>
                                <li><h6>Movie</h6></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li><Link to="/"><h6>Home</h6></Link></li>
                                    <li><Link to="/profile"><h6>Profile</h6></Link></li>
                                    <li><Link to="/login"><h6>Login</h6></Link></li>
                                    <li><Link onClick={this.afterSignout}><h6>Log Out</h6></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             </header>
        );
    }
}

export default connect("auth", actions)(Header);