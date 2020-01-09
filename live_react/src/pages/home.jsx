import React, { Component } from 'react';
import Header from "../components/header"
import { withRouter } from 'react-router-dom'
import romance from '../image/romance.jpg'
import action from '../image/action.jpg'
import fiction from '../image/fiction.jpg'
import comedy from '../image/comedy.jpg'
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Link } from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <div>
                <Header {...this.props} />
                <div className="container home-movies">
                    <div className="row">
                    <div className="col-md-3">
                        <div className="border text-center">
                            <h6>Romance</h6>
                            <img className="image-category" src={romance} alt=""/>
                        </div>
                        <div className="button text-center">
                            <Link to='/romance'><button onClick={() => store.setState({category : 'romance'})}>See Movies</button></Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border text-center">
                            <h6>Action</h6>
                            <img className="image-category" src={action} alt=""/>
                        </div>
                        <div className="button text-center">
                            <Link to='/action'><button onClick={() => store.setState({category : 'action'})}>See Movies</button ></Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border text-center">
                            <h6>Fiction</h6>
                            <img className="image-category" src={fiction} alt=""/>
                        </div>
                        <div className="button text-center">
                            <Link to='/fiction'><button onClick={() => store.setState({category : 'fiction'})}>See Movies</button></Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border text-center">
                            <h6>Comedy</h6>
                            <img className="image-category" src={comedy} alt=""/>
                        </div>
                        <div className="button text-center">
                            <Link to='/comedy'><button onClick={() => store.setState({category : 'comedy'})}>See Movies</button></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default connect("category", actions)(withRouter(Home));