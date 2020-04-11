import React, {Component} from 'react';
import {Route,  Redirect, Switch} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile'

export default class Routes extends Component{

    render(){
        return(
            <Switch>
                <Redirect
                        exact
                        from="/"
                        to="/home"
                    />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        );
    }
}