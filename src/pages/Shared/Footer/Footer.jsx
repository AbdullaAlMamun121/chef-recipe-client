import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            efficitur, purus vel finibus ultrices, nunc odio vehicula ante,
                            vel rutrum ipsum augue sit amet dolor.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="tel:(123)456-7890" className="text-light">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@yourcompany.com" className="text-light">
                                    info@yourcompany.com
                                </a>
                            </li>
                            <li>
                                <p className="text-muted">1234 Main Street</p>
                                <p className="text-muted">City, State ZIP</p>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Connect With Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="https://www.facebook.com/yourcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light"
                                >
                                    <FaFacebook className="mr-1" />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/yourcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light"
                                >
                                    <FaTwitter className="mr-1" />
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/yourcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light"
                                >
                                    <FaInstagram className="mr-1" />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <p className="text-center text-muted">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights
                    reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;