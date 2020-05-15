import React, { useState, useEffect } from 'react';
import Switch from './Switch.js';
import '../Css/Settings.scss';
import { primaryColor, sliderBackground } from '../constants';
import { useReducer } from 'react';

export default function Settings ({
	children,
	handleCheck,
	reversed,
	checkbox,
	maxheight = '500px',
	show = React.Children.count
}) {
	const [ initHeight, setInitHeight ] = useState('');
	const [ height, setHeight ] = useReducer((state, action) => (state = action), 0);

	useEffect(
		() => {
			const slider = document.querySelector('.slider-container');
			const sliderContainerHeight = slider.getBoundingClientRect().height;
			const sliderContainerMargin = getComputedStyle(slider).getPropertyValue('margin-bottom');
			const sliderTotalHeight = sliderContainerHeight + parseInt(sliderContainerMargin);
			const settingsContainerHeight = sliderTotalHeight * show + 'px';
			setHeight(settingsContainerHeight);
			setInitHeight(settingsContainerHeight);
		},
		[ show, initHeight ]
	);

	useEffect(
		() => {
			if (reversed) {
				let tempHeight = parseInt(initHeight) + 70 + 'px';
				setHeight(tempHeight);
			} else {
				setHeight(initHeight);
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[ reversed, initHeight ]
	);

	return (
		<div className="settings">
			<div className="slider-main-container" style={{ maxHeight: height }}>
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
