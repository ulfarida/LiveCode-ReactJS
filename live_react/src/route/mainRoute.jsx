import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from '../pages/home'
import Profile from '../pages/profile'
import Login from '../pages/login'
import Movies from '../pages/movies'
// import NotMatch from '../pages/notMatch'
import { Provider } from 'unistore/react';
import { store } from '../store';

const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/login' component={Login} />
                    <Route path='/:category' component={Movies} />
                    {/* <Route component={NotMatch} /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;