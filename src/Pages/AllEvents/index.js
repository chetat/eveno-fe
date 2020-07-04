import React from 'react';
import { Form, FormControl, Container, Row, Col, InputGroup } from "react-bootstrap";
import AppBar from '../../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../../Actions/eventsAction';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchEventsTypes } from '../../Actions/eventsTypes';
import { Button } from 'react-bootstrap';

import './styles.css'
import Footer from '../../Containers/Footer';

const AllEvents = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)

    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    useEffect(() => {
        dispatch(fetchEventsTypes())
    }, [])

    return (
        <div>
            <div>
                <AppBar />
                <Container fluid className="container mt-4">
                    <Row className="justify-content-center">
                        <Col lg={6} md={6}>
                            <Form.Group>
                                <Form.Control type="text" size="lg" placeholder="Search Events" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                        <h1>Filters</h1>

                        <Row>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                </InputGroup.Prepend>
                                <h5>Free</h5>
                            </InputGroup>
                            </Row>
                        </Col>
                        <Col lg={8}>
                        
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
};

export default AllEvents;