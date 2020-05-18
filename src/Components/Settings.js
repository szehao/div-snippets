import React, { useState, useEffect } from 'react';
import Switch from './Switch.js';
import '../Css/Settings.scss';
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
