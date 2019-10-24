import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './navigation';
import Portfolio, { Item } from './portfolio';

// Styles
import { Container } from 'react-bootstrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemdata from "../items.json";

// Images
import logo from './images/logo.svg';

let items: Item[][] = []

for (let i = 0; i < itemdata.length; i += 3) {
	let temp: Item[] = []
	for (let j = 0; j < 3; ++j){
		if (itemdata.length < (i + j + 1)){
			break;
		}
		let x: Item  = itemdata[i+j]
		temp.push(x)

	}
	items.push(temp)
}

const App: FC = () => (
	<Router>
		<Navigation />
		<Switch>
			<Route path='/portfolio'>
				<Portfolio items={items}/>
			</Route>
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
