import React from 'react';
import { copyText } from '../constants';

export default function CopyButton ({ content }) {
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
