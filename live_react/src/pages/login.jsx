import React, { Component } from 'react';
import Header from "../components/header"
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store";
import axios from "axios"

class Login extends Component {
    afterSignin = () => {
        console.warn('after signin')
        const self = this
        const input = {
            username : this.props.username,
            password : this.props.password
        }
        axios
            .post("https://alta1234.free.beeceptor.com/auth", input)
            .then(function(response) {
                console.warn(response.data)
                if(response.data.hasOwnProperty("token")) {
                    store.setState({username : response.data.username})
                    store.setState({email : response.data.email})
                    store.setState({token : response.data.token})
                    store.setState({auth : true})
                    self.props.history.push("/profile")
                    console.warn(self)
                }
            })
            .catch(function(error) {
                console.log(error)
            })
    }
     
    render () {
        return (
            <div>
                <Header {...this.props} />
                <div className="container text-center home-movies">
                    <div className="text-center">
                        <form onSubmit={e => e.preventDefault()}>
                            <h3>Masuk</h3>
                            <div className="input-box">
                                <input/>
                            </div>
                            <div className="input-box">
                                <input/>
                            </div>
                            <div className="input-box">
                                <button className="auth-button"
                                    onClick={() => this.afterSignin()}
                                    >
                                    Sign In
                                </button>
                            </div>
                        </form>                         
                    </div>
                </div>
            </div>    
        );
    }
}

export default connect("username, password", actions)(withRouter(Login));