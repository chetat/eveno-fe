import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    Button,
    Navbar, Nav,
    Form, FormControl, Container
} from 'react-bootstrap';
import { logout } from '../../Actions/authActions';
import './styles.css'

 
const AppBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    const {isAuthenticated} = useSelector(state => state.auth.isAuthenticated)

    return (
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
            <Navbar.Brand href="/">Eveno</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search Events"/>
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link className="link-nav" href="/manage/events/new">Create Event</Nav.Link>
                    { isAuthenticated ? <Nav.Link className="link-nav" eventKey={2} onClick={handleLogout} >Logout</Nav.Link> 
                      : <Nav.Link className="link-nav" eventKey={2} href="/auth/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;