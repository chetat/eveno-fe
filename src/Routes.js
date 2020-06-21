import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile'
import EventDetails from './pages/eventDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';



export default class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/events/detail/:eventId" component={EventDetails} />
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/register" component={Register} />
            </Switch>
        );
    }
}