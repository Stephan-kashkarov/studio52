import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './navigation';
import Portfolio from './portfolio';

// Styles
import { Container } from 'react-bootstrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import logo from './images/logo.svg';

const App: FC = () => (
	<Router>
		<Navigation />
		<Switch>
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/about'>

			</Route>
			<Route path='/contact'>

			</Route>
			<Route path='/'>
				<Container className='logo-center'>
					<img className='svg-logo' src={logo} alt="Studio 52 logo"/>
				</Container>
			</Route>
		</Switch>
		<hr/>
		<footer>
			&copy; Channel Campisi 2019 | Website by Stephan Kashkarov
		</footer>
	</Router>
);

export default App;
