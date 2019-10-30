import React from 'react';
// import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

// Images
import logo from './images/logo.svg';
import './styles/home.css'

const Home = () => (
    <Container className='logo-center'>
        <img className='svg-logo' src={logo} alt="Studio 52 logo" />
        {/* <div className="text">

            <h1>Welcome</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div> */}
        {/* <Jumbotron className='bg-dark'>
            Hello123
        </Jumbotron> */}
    </Container>
)

export default Home