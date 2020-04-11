import React from 'react'

export default function Tabs( {title, click, content} ) {
	return (
		<div className="tab-title" onClick={() => click(content)}>
			{title}
		</div>
	)
}
