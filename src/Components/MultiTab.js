import React, { useState, useEffect } from 'react';
import { MultiTabContext } from '../Context';
import { findAllElement, findElementById } from '../constants';
import '../Css/multitab.scss';

export default function MultiTab ({ children }) {
	const [ errorMsg, setErrorMsg ] = useState('');
	const [ width, setWidth ] = useState('');

	const handleClick = ({ target }, contentName) => {
		findAllElement('.tab-content').forEach((tabContent) => {
			tabContent.style.display = 'none';
		});

		const contentElement = findElementById(contentName);
		try {
			if (contentElement == null) throw new Error('TabContent must have an ID that matches Tabs');

			const tabs = findAllElement('.tab-title');
			const tabCount = tabs.length;
			tabs.forEach((tab, index) => {
				if (tab === target) {
					let left = 0;
					if (index > 0) {
						left = `${index / tabCount * 100}%`;
					}
					findElementById('active-border').style.left = left;
				}
			});
			contentElement.style.display = 'flex';
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	useEffect(
		() => {
			// Check if Children passed is valid
			try {
				const grandChildren = children[0] && children[0].props.children;
				if (!Array.isArray(children)) throw new Error('MultiTab must have at least 2 children');
				if (children[0].type.name !== 'TabHeader') throw new Error('TabHeader must come before TabContents');
				if (React.Children.count(children) - 1 !== React.Children.count(grandChildren))
					throw new Error('Number of TabContents must be the same as Tabs');

				setWidth(`${100 / React.Children.count(grandChildren)}%`);
			} catch (error) {
				setErrorMsg(error.message);
			}
		},
		[ children ]
	);

	return (
		<div className="multiTab-container">
			{errorMsg || (
				<MultiTabContext.Provider value={{ click: handleClick, width: width }}>
					{children}
				</MultiTabContext.Provider>
			)}
		</div>
	);
}
