import React, { useState, useEffect } from 'react';
import Settings from './Components/Settings';
import MultiTab from './Components/MultiTab';
import Tabs from './Components/Tabs';
import TabContent from './Components/TabContent';
import TabHeader from './Components/TabHeader';
import Slider from './Components/Slider';
import CopyButton from './Components/CopyButton';
import Content from './Components/Content';
import { primaryColor } from './constants';

export default function Skewed () {
	const [ angle, setAngle ] = useState(6);
	const [ reversed, setReversed ] = useState(false);
	const [ origin, setOrigin ] = useState('top right');

	const handleChange = ({ target: { value } }) => {
		reversed ? setAngle(-value) : setAngle(value);
	};

	const handleReversion = () => {
		setReversed((prevReversed) => !prevReversed);
		setAngle((prevAngle) => -prevAngle);
	};

	const transform = {
		transform : `skewY(${angle}deg)`
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
		\n	transform-origin : ${origin};\
		\n	background-color : ${primaryColor};\
		\n}`;

	useEffect(
		() => {
			if (reversed) {
				setOrigin('top left');
			} else {
				setOrigin('top right');
			}
		},
		[ reversed ]
	);

	return (
		<main>
			<section>
				<div
					className="skewed"
					style={{
						...transform,
						...(origin ? { transformOrigin: origin } : null)
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
