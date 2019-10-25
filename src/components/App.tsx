import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './navigation';
import Portfolio, { Item } from './portfolio';
import Home from './home';
import ItemPage from './page'

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
		temp.unshift(x)

	}
	items.unshift(temp)
}

const App: FC = () => (
	<Router>
		<Navigation />
		<Switch>
			<Route path='/portfolio'>
				<Portfolio items={items}/>
			</Route>
			<Route path='/contact'>

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
