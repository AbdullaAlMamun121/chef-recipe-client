import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Card, Image } from 'react-bootstrap';
import header from '../../../assets/header.jpg'
import feature1 from '../../../assets/feature-1.jpg'
import feature2 from '../../../assets/feature-2.jpg'

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Card className="bg-dark text-white mt-2">
                <Card.Img className='h-25' src={header} alt="Card image" />
                <Card.ImgOverlay className='d-flex'>
                    <div className='w-50'>
                        <Card.Title>Perfect Chef Recipe</Card.Title>
                        <Card.Text>
                            A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. A sub-recipe or subrecipe is a recipe for an ingredient that will be called for in the instructions for the main recipe.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                    <div className='w-50 h-25 rounded bg-black text-center'>
                    <Image style={{height:'100%'}} src={feature1} rounded />
                    <Image style={{height:'100%'}} src={feature2} rounded />
                    <Image style={{height:'100%'}} src={feature1} rounded />
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;