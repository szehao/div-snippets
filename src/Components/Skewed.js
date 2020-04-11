import React from 'react'
import { sliderColor } from "../constants"

export default function Skewed({ reversed, angle, origin}) {

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

	const transform = {
		transform: reversed ? `skewY(${-Math.abs(angle)}deg)` : `skewY(${angle}deg)`
	};

	return (
		<div
			className="skewed"
			style={{
				...style,
				...transform,
				...(origin ? { transformOrigin: origin } : null)
			}}
		/>
	)
}