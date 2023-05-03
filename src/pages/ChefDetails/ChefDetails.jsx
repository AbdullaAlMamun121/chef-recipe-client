import React, { useState } from 'react';
import { Button, Card, Container, Toast } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const { name, yearsOfExperience, descriptions, numberOfRecipes, likes, image, recipes } = details;
   
    const [disableButton,setDisableButton] = useState(null);
    const [showToast,setShowToast] = useState(false);

    const handleFavorite = (recipe_id) => {
        setDisableButton(recipe_id);
        setShowToast(true);
    }

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
            </Card>
            <div className='d-flex mt-4'>
                {recipes.map(recipe => <Card className='p-4 m-2'>
                    <p><span className='fw-bold'>Recipe No:</span> {recipe.id}</p>
                    <p><span className='fw-bold'>Recipe Name:</span> {recipe.name}</p>
                    <p> <span className='fw-bold'> Ingredients:</span>{recipe.ingredients}</p>
                    <p><span className='fw-bold'> Cooking Method:</span> {recipe.cookingMethod}</p>
                    <p><span className='fw-bold'> Rating:</span> {recipe.rating}</p>
                    <Button disabled={disableButton === recipe.id} 
                    onClick={()=>handleFavorite(recipe.id)} variant="secondary">Add Favorite</Button>

                </Card>)}
            </div>
            {
                showToast && <Toast onClose={() => setShowToast(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Favorite Recipe</strong>
                    </Toast.Header>
                    <Toast.Body>This recipe is now your favorite.</Toast.Body>
                </Toast>
            }
        </Container>
    );
};

export default ChefDetails;