import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {
    const { createUser} = useContext(AuthContext);
    const [error,setError] = useState('');
 
    const handleRegistration = event => {
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const pUrl = form.pUrl.value;
        console.log(name, email, password, pUrl);
        setError('');
        if(password.length<6){
            setError('password must be at least 6 characters');
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
          setError('Add at least One Upper case');
          return; 
        }
        createUser(email, password)
        .then(result =>{
          const loggedUser = result.user;
          form.reset();
          console.log(loggedUser);
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })
    }

    return (
        <div className='w-25 mx-auto py-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="pUrl" placeholder="Photo Url" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br></br>
                <Form.Text className="text-muted">
                    Already have an account to chef recipe? <Link to="/login">Login</Link>
                </Form.Text>
                <br/>
                <Form.Text className="text-muted">
                   {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Registration;