import React from 'react';

export default function Content ({ id, content }) {
	return (
		<pre id={id} style={{ whiteSpace: 'pre-wrap' }}>
			{content}
		</pre>
	);
}
