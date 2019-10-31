import React, {FC} from 'react';
// import {Link} from 'react-router-dom';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';

// Images
import logo from './images/logo.svg';
import './styles/home.css'

const Home: FC = () => (
    <Container className='logo-center'>
        <img className='svg-logo' src={logo} alt="Studio 52 logo" />
        <h4>Graphic Design, Photography, Marketing, Branding Business Cards, Posters, Flyers, Banners, and more!</h4>
        <p>We'll create elements that make your business stand out from the crowd and ensure your brand identity is unique and powerful. </p>
        <Jumbotron className='bg-dark'>
            <Row>
                <Col>
                    <h2>Social Media</h2>
                    <p>We create social media campaigns, provide strategies for success, and help people discover your brand! We help with sponsored posts, account creation, how to maintain a strong social media presence, and more!</p>
                </Col>
                <Col>
                    <h2>Web Design</h2>
                    <p>Create a stunning website with us that suits your brand! We ensure an aesthetic and functional website that works for you. </p>
                </Col>
                <Col>
                    <h2>Photography</h2>
                    <p>We utilise photography in addition to graphic design to create more engaging and professional pieces of work. </p>
                </Col>
            </Row>
            <Row className="centered">
                <img src={require('./images/pages/People.png')} alt="people"/>
            </Row>
            <Row>
                <Col>
                    <h2>Branding</h2>
                    <p>Make a lasting impression with designs that stand out and hold the attention of your audience. Your brand identity is important to us and we will ensure something your business will love.</p>
                </Col>
                <Col>
                    <h2>Logo Design</h2>
                    <p>We work collaboratively with you to create a logo that works for your brand</p>
                </Col>
            </Row>
        </Jumbotron>
        <p>Contact us to discover what we can do for your business!</p>
    </Container>
)

export default Home