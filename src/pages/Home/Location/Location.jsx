import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Location = () => {
    return (
        <div className="location-section py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} md={6} lg={4}>
                        <h2 className="text-center">Our Location</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <iframe
                            title="restaurant-location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6518173143855!2d-71.06822048441495!3d42.36212057915064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377902a90a369%3A0x67949f18ec86af0c!2s123%20Main%20St%2C%20Boston%2C%20MA%2002114%2C%20USA!5e0!3m2!1sen!2suk!4v1620169031054!5m2!1sen!2suk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Location;