import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';

const FoodCard = ({ food }) => {
    const { recipes } = food;
    return (
        <div>
            {recipes.map(recipe => <Card className='p-4 m-2'>
                <Image src={recipe.food_image}></Image>
                <p><span className='fw-bold'>Recipe Name:</span> {recipe.name}</p>
                <p><span className='fw-bold'> Rating:</span> {recipe.rating}</p>
                <Button variant="primary">Buy Now</Button>
            </Card>)}
        </div>
    );
};

export default FoodCard;