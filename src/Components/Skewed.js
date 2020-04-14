import React, { useState, useEffect } from "react";
import Settings from "./Settings";
import MultiTab from "./MultiTab";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import {sliderColor, copy} from "../constants"

export default function Skewed() {

	const [angle, setAngle] = useState(6);
	const [reversed, setReversed] = useState(false);
	const [origin, setOrigin] = useState("top right");
	

	const handleChange = ({target : {value}}) => {
		setAngle(value);
	}

	const handleReversion = () => {
		setReversed(prevReversed => !prevReversed);
	}

	const transform = {
		transform: reversed ? `skewY(${-Math.abs(angle)}deg)` : `skewY(${angle}deg)`
	};

	const css = `.skewed {\
		\n	position: absolute,\
		\n	top : 0,\
		\n	bottom : 0,\
		\n	right : 0,\
		\n	width : 100%,\
		\n	height : 100%,\
		\n	transform : skewY(${reversed? -angle : angle}deg),\
		\n	transform-origin : "${origin}",\
		\n	background-color : ${sliderColor}\
		\n}`;
	
	const style = {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		width: "100%",
		height: "50%",
		transform: "skewY(6deg)",
		transformOrigin: "top right",
		backgroundColor: sliderColor
	};

	const copyText = (ele, eleCopy) => {
		copy(eleCopy);
		const triangle = ele.target.previousSibling;
		triangle.style.display = "flex";
		triangle.style.animation = "fadeOut 2s ease";
		setTimeout(() => triangle.style.display = "none", 2000);
	}

	useEffect(() => {
		if(reversed){
			setOrigin("top left");
		}else{
			setOrigin("top right");
		}
	}, [reversed]);

	return (
		<main>
			<section>
				<div
					className="skewed"
					style={{
						...style,
						...transform,
						...(origin ? { transformOrigin: origin } : null)
					}}
				/>
			</section>
			<aside>
				<Settings
					title="Angle"
					change={handleChange}
					min="0"
					max="90"
					value={angle}
					checkbox
					reversed={reversed}
					handleCheck={handleReversion}
				/>
				<MultiTab>
					<TabHeader style={{height:"50px"}}>
						<Tabs title="HTML" content="html"/>
						<Tabs title="CSS" content="css"/>
					</TabHeader>
					<TabContent tabId="html" init="true">
						<pre id="html-content">
							{`<section>\n	<div class="skewed"></div>\n</section>`}
						</pre>
						<div className="button-container">
							<div className="triangle">Copied!</div>
							<button onClick={(e) => {copyText(e,"html-content")}}>COPY</button>
						</div>
					</TabContent>
					<TabContent tabId="css">
						<pre id="css-content">
							{css} 
						</pre>
						<div className="button-container">
							<div className="triangle">Copied!</div>
							<button onClick={(e) => {copyText(e,"css-content")}}>COPY</button>
						</div>				
					</TabContent>
				</MultiTab>
			</aside>
		</main>
	)
}