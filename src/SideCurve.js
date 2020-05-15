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

export default function SideCurve () {
	const [ sideCurve, setSideCurve ] = useState(40);
	const [ bottomCurve, setBottomCurve ] = useState(50);
	const [ height, setHeight ] = useState(40);
	const [ reversed, setReversed ] = useState(false);

	const handleChange = ({ target: { value } }, title) => {
		switch (title) {
			case 'Side Curve':
				setSideCurve(value);
				break;
			case 'Bottom Curve':
				setBottomCurve(value);
				break;
			case 'Height':
				setHeight(value);
				break;
			default:
				console.error('Missing title for Slider component');
				break;
		}
	};

	const handleReversion = () => {
		setReversed((prevReversed) => !prevReversed);
	};

	const html = `<section class="curve"></section>`;

	const css = `.curve {\
			\n	position: relative;\
			\n	width : 100%;\
			\n	height : 50vh;\
			\n	background-color : ${primaryColor};\
			\n${!reversed
				? `	border-bottom-left-radius : ${bottomCurve}% ${sideCurve}%;\
			\n	border-bottom-right-radius : ${bottomCurve}% ${sideCurve}%;\
			\n}`
				: `}\
			\n\n.curve:before{\
			\n	content : '';\
			\n	border-top-left-radius : ${bottomCurve}% ${sideCurve}%;\
			\n	border-top-right-radius : ${bottomCurve}% ${sideCurve}%;\
			\n	position : absolute;\
			\n	bottom : 0;\
			\n	width : 100%;\
			\n	background : ${backgroundColor};\
			\n	height : ${height}%;\
			\n}`}`;

	const style = {
		background : primaryColor
	};

	useEffect(
		() => {
			const property = [
				{
					name  : '--side-curve-border-left',
					value : `${bottomCurve}% ${sideCurve}%`
				},
				{
					name  : '--side-curve-border-right',
					value : `${bottomCurve}% ${sideCurve}%`
				},
				{
					name  : '--height-curve-reversed',
					value : `${height}%`
				}
			];
			setRootVariables(property);
		},
		[ sideCurve, bottomCurve, height ]
	);

	return (
		<main>
			<section style={{ ...style }} className={reversed ? 'curve-reversed' : 'curve'} />
			<aside>
				<Settings reversed={reversed} handleCheck={handleReversion} show="2" checkbox>
					<Slider title="Side Curve" change={handleChange} value={sideCurve} />
					<Slider title="Bottom Curve" change={handleChange} value={bottomCurve} />
					<Slider title="Height" change={handleChange} value={height} />
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
