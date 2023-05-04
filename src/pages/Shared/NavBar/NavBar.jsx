import React, { useContext } from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

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
                        <ActiveLink to="/" >Home</ActiveLink>
                        <ActiveLink to="/blogs" >Blog</ActiveLink>
                    </Nav>
                    <Nav>
                        {
                            user && <Image title={user?.displayName} style={{height:'40px', borderRadius:'50%', marginRight:'10px'}} src={user?.photoURL}></Image>
                            
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