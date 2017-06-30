import React, { Component } from 'react';
import Clock from './clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
				deadline: 'December 25, 2017',
				newDeadline: ''
			}
		}

		changeDeadline() {
			this.setState({deadline: this.state.newDeadline});
		}

	render() {
		return (
				<div className="App">
					<div>
						<h1 className="App-title">Countdown to {this.state.deadline}</h1>
					</div>
					<Clock
					deadline = {this.state.deadline}

					 />
					<Form inline>
						<FormControl className="new-deadline" placeholder="New date" onChange = {event => this.setState({newDeadline: event.target.value})}/>
						<button onClick = {() => this.changeDeadline()} className="btn btn-primary">Submit</button>
					</Form>
				</div>
			)
	}
}

export default App;