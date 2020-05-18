import React from 'react';
import { copyText } from '../constants';

export default function TabContent ({ children, tabId, init }) {
	return (
		<div className="tab-content" id={tabId} style={{ display: init === 'true' ? 'flex' : 'none' }}>
			{children}
		</div>
	);
}

export function CopyButton ({ content }) {
	return (
		<div className="button-container">
			<div className="pop-triangle">Copied!</div>
			<button
				onClick={(e) => {
					copyText(e, content);
				}}
			>
				COPY
			</button>
		</div>
	);
}

export function Content ({ id, content }) {
	return (
		<pre id={id} style={{ whiteSpace: 'pre-wrap' }}>
			{content}
		</pre>
	);
}
