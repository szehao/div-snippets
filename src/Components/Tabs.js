import React from 'react';

export default function Tabs ({ title, click, content, style }) {
	return (
		<div className="tab-title" data-content-name={content} onClick={(e) => click(e, content)} style={style}>
			{title}
		</div>
	);
}
