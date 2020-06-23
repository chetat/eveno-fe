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
import NotFound from "./Pages/NotFound"
import AuthRoute from "./Utils/AuthRoute";



 const Routes = () => {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute exact path="/profile" component={Profile}  />
                <Route exact path="/events/all" component={AllEvents} />
                <Route exact path="/events/detail/:eventId" component={EventDetails} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/password/reset" component={Reset}/>
                <Route exact path="/auth/password/forgot" component={Forgot}/>
                <AuthRoute exact path="/manage/events/new" component={NewEvent} />
                <AuthRoute exact path="/manage/events/tickets/new" component={NewTicket} />
                <AuthRoute exact path="/manage/events/tickets/:id/details" component={TicketDetail} />
                <AuthRoute exact path="/manage/events/edit/:eventId" component={EditEvent} />
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    
}
export default Routes;