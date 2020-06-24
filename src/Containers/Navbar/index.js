import React, { useState } from 'react';
import {
    Button,
    NavDropdown,
    Container,
    Navbar, Nav,
    Form, FormControl
} from 'react-bootstrap';


const AppBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Eveno</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link href="/manage/events/new">Create Event</Nav.Link>
                    <Nav.Link eventKey={2} href="/auth/login">
                       Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;