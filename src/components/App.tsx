import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './imgs/logo.svg';
// import Navbar from './navbar';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
	render () {
		return (
			<div className="App">
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default App;
