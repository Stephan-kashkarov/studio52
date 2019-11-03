import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Assets
import logo from './images/title-logo.png';
import './styles/navigation.css';

const Navigation: FC = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="">
                    <Link to="/" className='nav-elem'>
                        Home
                    </Link>
                </Nav.Link>
                <Nav.Link href="">
                    <Link to="/portfolio" className='nav-elem'>
                        Portfolio
                    </Link>
                </Nav.Link>
                <Nav.Link href="">
                    <Link to="/contact" className='nav-elem'>
                        Contact
                    </Link>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)


export default Navigation;