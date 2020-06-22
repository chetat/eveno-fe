import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import EditEvent from './Pages/Manage/EditEvent';
import NewEvent from './Pages/Manage/NewEvent';
import NewTicket from './Pages/Manage/NewTicket';
import Profile from './Pages/Manage/Profile'
import EventDetails from './Pages/EventDetails';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AllEvents from './Pages/AllEvents';
import TicketDetail from './Pages/Manage/TicketDetail';
import Forgot from "./Pages/Auth/Password/Forgot";
import Reset from "./Pages/Auth/Password/Reset";




export default class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/events/all" component={AllEvents} />
                <Route exact path="/events/detail/:eventId" component={EventDetails} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/password/reset" component={Reset}/>
                <Route exact path="/auth/password/forgot" component={Forgot}/>
                <Route exact path="/manage/events/new" component={NewEvent} />
                <Route exact path="/manage/events/tickets/new" component={NewTicket} />
                <Route exact path="/manage/events/tickets/:id/details" component={TicketDetail} />
                <Route exact path="/manage/events/edit/:eventId" component={EditEvent} />
            </Switch>
        );
    }
}