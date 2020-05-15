import React from 'react';
import { primaryColor, sliderBackground } from '../constants';

export default function Slider ({ className = '', min = 0, max = 100, value = 50, title, change }) {
	const backgroundValue = (Math.abs(value) - min) * 100 / (max - min);
	const style = {
		background :
			`linear-gradient(to right, ${primaryColor} 0%, ${primaryColor} ${backgroundValue}%,` +
			`${sliderBackground} ${backgroundValue}%, ${sliderBackground} 100%)`
	};

	return (
		<div className="slider-container">
			<header>
				<span>{title || 'Title'}</span>
				<span>{value || 'Value'}</span>
			</header>
			<input
				type="range"
				className={`slider ${className}`}
				min={min}
				max={max}
				defaultValue={value}
				onChange={(e) => change(e, title)}
				style={style}
			/>
		</div>
	);
}
