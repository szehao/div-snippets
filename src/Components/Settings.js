import React, { useState, useEffect } from 'react';
import '../Css/Settings.scss';
import '../Css/switch.scss';
import { primaryColor, sliderBackground, findElement } from '../constants';
import { useReducer } from 'react';

export default function Settings ({
	children,
	handleCheck,
	reversed,
	checkbox,
	show = React.Children.count(children)
}) {
	const [ initHeight, setInitHeight ] = useState('');
	const [ height, setHeight ] = useReducer((state, action) => (state = action), 0);
	const [ sliderTotalHeight, setSliderHeight ] = useState('');
	useEffect(
		() => {
			const slider = findElement('.slider-container');
			const sliderHeight = slider.getBoundingClientRect().height;
			const sliderMarginBottom = getComputedStyle(slider).getPropertyValue('margin-bottom');
			const sliderTotalHeight = sliderHeight + parseInt(sliderMarginBottom);
			const settingsContainerHeight = Math.round(sliderTotalHeight * show);
			setSliderHeight(sliderTotalHeight);
			setHeight(settingsContainerHeight);
			setInitHeight(settingsContainerHeight);
		},
		[ show, initHeight ]
	);

	useEffect(
		() => {
			if (reversed) {
				const childrenCount = React.Children.count(children);
				let tempHeight = parseInt(initHeight) + sliderTotalHeight * (childrenCount - show);
				setHeight(Math.round(tempHeight));
			} else {
				setHeight(initHeight);
			}
		},
		[ reversed, initHeight, sliderTotalHeight, children, show ]
	);

	return (
		<div className="settings">
			<div className="slider-main-container" style={{ maxHeight: `${height}px` }}>
				{children}
			</div>
			{checkbox ? (
				<div className="switch-container">
					<span>Reversed</span>
					<Switch background={reversed ? primaryColor : sliderBackground} handleCheck={handleCheck} />
				</div>
			) : null}
		</div>
	);
}

export function Slider ({ className = '', min = 0, max = 100, value = 50, title, change }) {
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

export function Switch ({ handleCheck, background = '' }) {
	return (
		<label className="switch-box">
			<input type="checkbox" onClick={handleCheck} />
			<span className="switch-button" style={{ background: background }} />
		</label>
	);
}
