import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const { name, yearsOfExperience, descriptions, numberOfRecipes, likes, image, recipes } = details;
    return (
        <Container>
            <h3 className="text-center">Chef details</h3>
            <Card>
                <Card.Header className="text-center">Chef Details Information</Card.Header>
                <Card.Body>
                    <Card.Title><span className='fw-bold'> Cook Name:</span> {name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            <div className='d-flex'>
                {recipes.map(recipe => <Card>
                    <p><span className='fw-bold'>Recipe Name:</span> {recipe.name}</p>
                    <p> <span className='fw-bold'> Ingredients:</span>{recipe.ingredients}</p>
                    <p><span className='fw-bold'> Cooking Method:</span> {recipe.cookingMethod}</p>

                </Card>)}
            </div>
        </Container>
    );
};

export default ChefDetails;