import React from 'react'

export default function TabHeader({children, color}) {
	console.log(children.length);
	
	return (
		<div className="tab-header">

			{children}
		</div>
	)
}
