import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { Card, Carousel, Image } from 'react-bootstrap';
import header from '../../../assets/header.jpg'
import header2 from '../../../assets/header-bg.jpg'
import feature1 from '../../../assets/feature-1.jpg'
import feature2 from '../../../assets/feature-2.jpg'

const Header = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-100 w-100"
                        src={header}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-100 w-100"
                        src={header2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-100 w-100"
                        src={header}
                        alt="Third slide"
                        
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;