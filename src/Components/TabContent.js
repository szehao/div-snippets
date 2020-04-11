import React from 'react'

export default function TabContent({ children, tabId, visible }) {

	const display = visible? "block" : "none";

	return (
		<div className="tab-content" id={tabId} style={{display : display}}>
			{children}
		</div>
	)
}
