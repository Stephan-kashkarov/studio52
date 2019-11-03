import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import Navigation from './navigation';
import Portfolio, { Item } from './portfolio';
import Home from './home';
import ItemPage from './page'

import {FaInstagram, FaFacebook, FaEnvelope, FaPhone} from 'react-icons/fa'
// Styles
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemdata from "../items.json";

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
			<Route path='/contact'>
				<Container className="test">
					<h1>
						Contact Us!
					</h1>
					<Container className="tablework">
						<table>
							<tr>
								<td><FaPhone /></td>
								<td>+61 449 004 212</td>
							</tr>
							<tr>
								<td><FaEnvelope /> </td>
								<td>chanel.campisi@gmail.com</td>
							</tr>
							<tr>
								<td>
									<FaInstagram />
								</td>
								<td>
									@Studio52Marketing
								</td>
							</tr>
							<tr>
								<td>
									<FaFacebook />
								</td>
								<td>
									@Studio52Marketing
								</td>
							</tr>
						</table>
					</Container>
				</Container>
			</Route>
			<Route path='/pages/:id' component={ItemPage}/>
			<Route path='/' component={Home}/>
		</Switch>
		<hr/>
		<footer>
			&copy; Channel Campisi 2019 | Website by Stephan Kashkarov
		</footer>
	</Router>
);

export default App;
