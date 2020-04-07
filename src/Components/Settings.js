import React, { Component } from 'react';
import "../Css/Slider.scss";

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="settings">
				<div className="head">
					<div className="title">{this.props.title? this.props.title : "Title"}</div>
					<div className="value">{this.props.value? this.props.value : "Value "}</div>
				</div>
				<input 
					type="range"
					className="slider" 
					min={this.props.min? this.props.min : "1"} 
					max={this.props.max? this.props.max : "100"} 
					defaultValue={this.props.value? this.props.value : "50"}
					onChange={(e) => this.props.change(e)}
				/>
			</div>
		);
	}
}

export default Settings;