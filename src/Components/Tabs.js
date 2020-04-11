import React from 'react'

export default function Tabs( {title, click} ) {
	return (
		<div className="tab-title" onClick={click}>
			{title}
		</div>
	)
}
