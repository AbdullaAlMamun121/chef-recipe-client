import React, { lazy, Suspense } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LazyCardImg = lazy(() => import('react-bootstrap/CardImg'));

const ChefsCard = ({ chef }) => {
  const { id, name, yearsOfExperience, numberOfRecipes, likes, image } = chef;
  console.log(id);
  return (
    <Container>
      <Card className='mb-4'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCardImg variant="top" src={image} />
        </Suspense>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Years of experience: {yearsOfExperience}</p>
            <p>Number of recipes: {numberOfRecipes}</p>
            <p>Likes: {likes}</p>
          </Card.Text>
          <Link to={`/chef/${id}`}>
            <Button variant="primary">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChefsCard;
