import React, { useContext } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => {
                console.log(err)
            });
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Chef recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none px-2' to="/">Home</Link>
                        <Link className='text-decoration-none px-2' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        {
                            user && <Image style={{height:'40px', borderRadius:'50%', marginRight:'10px'}} src={user?.photoURL}></Image>
                            
                        }
                        {
                            user ?
                                <Button onClick={handleSignOut} variant="secondary">Logout</Button>

                                :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;