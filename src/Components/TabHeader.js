import React from 'react'
import {sliderColor} from "../constants"

export default function TabHeader({children, style}) {
	
	return (
		<div className="tab-header" style={style}>
			{children}
			<div id="active-border" style={{width: 100/children.length+"%", background : sliderColor}}></div>
		</div>
	)
}
