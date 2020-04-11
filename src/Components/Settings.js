import React from 'react';
import Switch from './Switch.js';
import '../Css/Slider.scss';
import { sliderColor , sliderBackground } from "../constants";

export default function Settings({
	value,
	min,
	max,
	title,
	handleCheck,
	reversed,
	change,
	checkbox
}) {

	const backgroundValue = (value/max)*100;
	const style = {
		background : 
		`linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ` +
		backgroundValue +
		`%, ${sliderBackground} ` +
		backgroundValue +
		`%, ${sliderBackground} 100%)`
	};

	return (
		<div className="settings">
			<div className="head">
				<div className="title">{title || "Title"}</div>
				<div className="value">{reversed? -value : value || "Value "}</div>
			</div>
			<input
				type="range"
				className="slider"
				min={min || 1}
				max={max || 100}
				defaultValue={value || 50}
				onChange={change}
				style={style}
			/>		
			{checkbox ? (
			<div className="switch-container">
				<span>Reversed</span>
				<Switch
					background={reversed ? sliderColor : sliderBackground}
					handleCheck={handleCheck}
				/>
			</div>
			) : null}
		</div>
	);
}



