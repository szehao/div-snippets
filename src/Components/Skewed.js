import React, { Component } from 'react';

const style = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	width: "100%",
	height: "50%",
	background : "black",
	transform : "skewY(6deg)",
	transformOrigin : "top right"
}

class Skewed extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div 
				className="skewed" 
				style={{...style, 
						...this.props.transform? {transform : this.props.transform} : null,
						...this.props.background? {background : this.props.background} : null}} 

			/>
		);
	}
}

export default Skewed;