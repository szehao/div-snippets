import React from 'react';

export default function boxOption ({ img, imgAlt, click, data, active }) {
	return (
		<div
			className={`box-option ${active ? 'active' : ''}`}
			onClick={() => {
				if (!active) {
					click(data);
				}
			}}
		>
			<img src={img} alt={imgAlt} />
		</div>
	);
}
