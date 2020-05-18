import React from 'react';
import { primaryColor } from '../constants';
import { MultiTabContext } from '../Context';

export default function TabHeader ({ children, style }) {
	return (
		<div className="tab-header" style={style}>
			{children}
			<div id="active-border" style={{ width: 100 / children.length + '%', background: primaryColor }} />
		</div>
	);
}

export function Tabs ({ title, content }) {
	return (
		<MultiTabContext.Consumer>
			{({ click, width }) => (
				<div
					className="tab-title"
					data-content-name={content}
					onClick={(e) => click(e, content)}
					style={{ width: width }}
				>
					{title}
				</div>
			)}
		</MultiTabContext.Consumer>
	);
}
