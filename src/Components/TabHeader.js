import React from 'react';
import { primaryColor } from '../constants';

export default function TabHeader ({ children, style }) {
	return (
		<div className="tab-header" style={style}>
			{children}
			<div id="active-border" style={{ width: 100 / children.length + '%', background: primaryColor }} />
		</div>
	);
}
