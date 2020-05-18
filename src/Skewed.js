import React, { useState, useEffect } from 'react';
import Settings, { Slider } from './Components/Settings';
import MultiTab from './Components/MultiTab';
import TabContent, { CopyButton, Content } from './Components/TabContent';
import TabHeader, { Tabs } from './Components/TabHeader';
import { primaryColor } from './constants';

export default function Skewed () {
	const [ angle, setAngle ] = useState(-6);
	const [ reversed, setReversed ] = useState(false);

	const handleChange = ({ target: { value } }) => {
		reversed ? setAngle(-value) : setAngle(value);
	};

	const handleReversion = () => {
		setReversed((prevReversed) => !prevReversed);
	};

	const html = `<section>\n	<div class="skewed"></div>\n</section>`;

	const css = `.skewed {\
		\n	position: absolute;\
		\n	top : 0;\
		\n	right : 0;\
		\n	bottom : 0;\
		\n	left : 0;\
		\n	width : 100%;\
		\n	height : 100%;\
		\n	transform : skewY(${angle}deg);\
		\n	transform-origin : top ${reversed ? 'left' : 'right'}\
		\n	background-color : ${primaryColor};\
		\n}`;

	useEffect(
		() => {
			setAngle((prevAngle) => -prevAngle);
		},
		[ reversed ]
	);

	return (
		<main>
			<section>
				<div
					className="skewed"
					style={{
						transform       : `skewY(${angle}deg)`,
						transformOrigin : `top ${reversed ? 'left' : 'right'}`
					}}
				/>
			</section>
			<aside>
				<Settings reversed={reversed} handleCheck={handleReversion} checkbox>
					<Slider title="Angle" change={handleChange} value={Math.abs(angle)} max="90" />
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
