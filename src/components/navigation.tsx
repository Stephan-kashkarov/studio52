import React, { Component } from 'react';
import './styles/navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './images/title-logo.svg';

class Navigation extends Component {
    render () {
        return (
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
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className='nav-elem'>Home</Nav.Link>
                        <Nav.Link href="#features" className='nav-elem'>Portfolio</Nav.Link>
                        <Nav.Link href="#pricing" className='nav-elem'>About</Nav.Link>
                        <Nav.Link href="#pricing" className='nav-elem'>Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;