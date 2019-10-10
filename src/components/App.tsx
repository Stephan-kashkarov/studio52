import React, { Component } from 'react';
import Navigation from './navigation';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
	render () {
		return (
			<div className="App">
				<Navigation />
			</div>
		);
	}
}

export default App;
