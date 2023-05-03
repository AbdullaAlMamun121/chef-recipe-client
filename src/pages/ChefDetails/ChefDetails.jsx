import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const { name, yearsOfExperience, descriptions, numberOfRecipes, likes, image, recipes } = details;
    return (
        <Container className='mt-5 p-5'>
            <h3 className="text-center">Chef details</h3>
            <Card>
                <Card.Header className="text-center">Chef Details Information</Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><span className='fw-bold'> Cook Name:</span> {name}</Card.Title>
                    <Card.Text><span className='fw-bold'>Experience:</span> {yearsOfExperience}</Card.Text>
                    <Card.Text><span className='fw-bold'>Recipe Amount:</span> {numberOfRecipes}</Card.Text>
                    <Card.Text><span className='fw-bold'>Recipe Description:</span> {descriptions}</Card.Text>
                    <Card.Text> <FaThumbsUp /> {likes}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Footer</Card.Footer>
            </Card>
            <div className='d-flex mt-4'>
                {recipes.map(recipe => <Card className='p-4 m-2'>
                    <p><span className='fw-bold'>Recipe Name:</span> {recipe.name}</p>
                    <p> <span className='fw-bold'> Ingredients:</span>{recipe.ingredients}</p>
                    <p><span className='fw-bold'> Cooking Method:</span> {recipe.cookingMethod}</p>
                    <p><span className='fw-bold'> Rating:</span> {recipe.rating}</p>
                    <Button variant="secondary">Add Favorite</Button>

                </Card>)}
            </div>
        </Container>
    );
};

export default ChefDetails;