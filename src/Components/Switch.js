import React from 'react';
import '../Css/switch.scss';

export default function Switch ({ handleCheck, background = '' }) {
	return (
		<label className="switch-box">
			<input type="checkbox" onClick={handleCheck} />
			<span className="switch-button" style={{ background: background }} />
		</label>
	);
}
