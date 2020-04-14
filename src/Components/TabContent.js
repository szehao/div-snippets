import React from 'react'

export default function TabContent({ children, tabId, init }) {

	return (
		<div className="tab-content" id={tabId} style={{display : init === "true"? "flex" : "none"}}>
			{children}
		</div>
	)
}
