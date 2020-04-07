import React, { Component } from 'react';
import Settings from "./Components/Settings.js"
import Skewed from "./Components/Skewed.js"
import "./Css/style.scss";
import "./Css/reset.css";

const sliderColor = "#ba54ff";
const sliderBackground = "#d3d3d3";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			angle : 6
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		document.querySelectorAll(".slider").forEach((element) => {
			const value = parseInt(element.value)/parseInt(element.max)*100;
			element.style.background = `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ` + value + `%, ${sliderBackground} ` + value + `%, ${sliderBackground} 100%)`;	
		});
	}

	handleChange = (event) => {
		this.setState({angle : event.target.value});
		const value = parseInt(event.target.value)/parseInt(event.target.max)*100;
		event.target.style.background = `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ` + value + `%, ${sliderBackground} ` + value + `%, ${sliderBackground} 100%)`;	
	}	

	render() {
		return (
			<div className="App">
				<main>
					<section>
						<Skewed transform = {`skewY(${this.state.angle}deg)`} background={sliderColor}/>
					</section>
					<aside>
						<Settings title="Angle" change={this.handleChange} min="0" max="90" value={this.state.angle}/>
					</aside>
				</main>
			</div>
		);
	}
}

export default App;