import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { createUserByGoogle, createUserByGithub, logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');

        logIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                form.reset();
                navigate(from,{replace:true});
                console.log(loggedIn);
            })
            .catch(err => {
                setError(err.message);
                console.log(err.message);
            });
    }
    const handleLoginByGoogle = () => {
        createUserByGoogle()
            .then(result => {
                const loggedInUser = result.user;
                navigate(from,{replace:true});
                console.log(loggedInUser);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleLoginByGithub = () => {
        createUserByGithub()
            .then(result => {
                const loggedInUser = result.user;
                navigate(from,{replace:true});
                console.log(loggedInUser);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className='w-25 mx-auto py-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button onClick={handleLoginByGoogle} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    <br></br>
                    <Button onClick={handleLoginByGithub} variant="outline-primary"> <FaGithub /> Login with Github</Button>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Form.Text className="text-muted">
                    New to chef recipe? <Link to="/register">Register</Link>
                </Form.Text>
                <br/>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;