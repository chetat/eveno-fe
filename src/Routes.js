import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile'
import EventDetails from './pages/eventDetails';

export default class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/eventdetails" component={EventDetails} />
            </Switch>
        );
    }
}