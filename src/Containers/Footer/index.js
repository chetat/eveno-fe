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
                        <h3 className="footer-text-center">Useful Links</h3>
                        <Col lg={6}>
                            <ul>
                                <li>Events</li>
                                <li> Categories</li>
                                <li>Services</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                        </Col>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Footer;