import React, { useState, useEffect } from 'react';
import Settings from './Components/Settings';
import MultiTab from './Components/MultiTab';
import Tabs from './Components/Tabs';
import TabContent from './Components/TabContent';
import TabHeader from './Components/TabHeader';
import CopyButton from './Components/CopyButton';
import Content from './Components/Content';
import { primaryColor, backgroundColor, setRootVariables } from './constants';
import Slider from './Components/Slider';

export default function Triangle () {
	const [ leftBorder, setLeftBorder ] = useState(120);
	const [ rightBorder, setRightBorder ] = useState(120);
	const [ middleBorder, setMiddleBorder ] = useState(90);
	const [ left, setLeft ] = useState(50);
	const [ reversed, setReversed ] = useState(false);

	const handleChange = ({ target: { value } }, title) => {
		switch (title) {
			case 'Left Border':
				setLeftBorder(value);
				break;
			case 'Right Border':
				setRightBorder(value);
				break;
			case 'Middle Border':
				setMiddleBorder(value);
				break;
			case 'Left':
				setLeft(value);
				break;
			default:
				console.error('Missing title for Slider component');
				break;
		}
	};

	const handleReversion = () => {
		setReversed((prevReversed) => !prevReversed);
	};

	const html = `<section class="triangle"></section>`;

	const css = `.triangle {\
			\n	position: relative;\
			\n	width : 100%;\
			\n	height : 40vh;\
			\n	background-color: ${primaryColor};\
			\n}\n
			\n.triangle:before {\
			\n	content: '';\
			\n	position: absolute;\
			\n	bottom: 0;\
			\n	width: 0;\
			\n	height: 0;\
			\n	border-style: solid;\
			\n	border-width: ${reversed ? '0' : middleBorder}px ${rightBorder}px ${reversed
		? middleBorder
		: '0'}px ${leftBorder}px;\
			\n	border-color: ${reversed ? 'transparent' : primaryColor} transparent ${reversed
		? backgroundColor
		: 'transparent'} transparent;\
			\n	left: ${left}%;\
			\n	transform: translateX(-50%) ${reversed ? '' : 'translateY(98%)'};\
			\n}`;

	useEffect(
		() => {
			if (reversed) {
				// --triangle-translate: translateX(-50%) translateY(99%);
			}
		},
		[ reversed ]
	);

	useEffect(
		() => {
			const property = [
				{
					name  : '--triangle-border-width',
					value : `${reversed ? '0' : middleBorder}px ${rightBorder}px ${reversed
						? middleBorder
						: '0'}px ${leftBorder}px`
				},
				{
					name  : '--triangle-border-color',
					value : `${reversed ? 'transparent' : primaryColor} transparent ${reversed
						? backgroundColor
						: 'transparent'} transparent`
				},
				{
					name  : '--triangle-translate',
					value : `translateX(-50%) ${reversed ? '' : 'translateY(98%)'}`
				},
				{
					name  : '--triangle-left',
					value : `${left}%`
				}
			];
			setRootVariables(property);
		},
		[ middleBorder, leftBorder, rightBorder, reversed, left ]
	);
	return (
		<main>
			<section className="triangle" />
			<aside>
				<Settings reversed={reversed} handleCheck={handleReversion} checkbox>
					<Slider title="Left Border" change={handleChange} min="20" max="250" value={leftBorder} />
					<Slider title="Middle Border" change={handleChange} min="20" max="250" value={middleBorder} />
					<Slider title="Right Border" change={handleChange} min="20" max="250" value={rightBorder} />
					<Slider title="Left" change={handleChange} min="25" max="75" value={left} />
				</Settings>
				<MultiTab>
					<TabHeader style={{ height: '50px' }}>
						<Tabs title="HTML" content="html" />
						<Tabs title="CSS" content="css" />
					</TabHeader>
					<TabContent tabId="html" init="true">
						<Content id="html-content" content={html} />
						<CopyButton content="html-content" />
					</TabContent>
					<TabContent tabId="css">
						<Content id="css-content" content={css} />
						<CopyButton content="css-content" />
					</TabContent>
				</MultiTab>
			</aside>
		</main>
	);
}
