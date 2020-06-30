import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <h3>About Us</h3>
                        <p>
                        
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <Row>
                        <Col lg={6}>
                        <h3 className="footer-text-center">Useful Links</h3>

                            <ul>
                                <li>Browse Events</li>
                                <li> Categories</li>
                                <li>Services</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                        <h3 className="footer-text-center">Categories</h3>
                        <ul>
                                <li>Arts</li>
                                <li>Technology</li>
                                <li>Music</li>
                                <li>Festivals</li>
                            </ul>
                        </Col>
                        </Row>
                       
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Footer;