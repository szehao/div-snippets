import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings.js";
import Skewed from "./Components/Skewed.js";
import MultiTab from "./Components/MultiTab"
import "./Css/style.scss";
import "./Css/reset.css";

export default function App() {

	const [angle, setAngle] = useState(6);
	const [reversed, setReversed] = useState(false);
	const [origin, setOrigin] = useState("top right");

	const handleChange = ({target : {value}}) => {
		setAngle(value);
	}

	const handleReversion = () => {
		setReversed(prevReversed => !prevReversed);
	}

	useEffect(() => {
		if(reversed){
			setOrigin("top left");
		}else{
			setOrigin("top right");
		}
	}, [reversed]);

	return (
		<div className="App">
			<main>
				<section>
					<Skewed angle={angle} reversed={reversed} origin={origin}/>
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
					<MultiTab />
				</aside>
			</main>
		</div>
	);
}

