import React, { useState } from 'react';
import Tabs from "./Tabs"
import TabContent from "./TabContent"
import TabHeader from "./TabHeader"
import "../Css/multitab.scss";

export default function MultiTab() {

	const [visible, setVisibility] = useState({html : true, css : false});

	const handleClick = (contentName) => {
		setVisibility({html : !visible.html, css : !visible.css});
	}

	return (
		<div className="multiTab-container">		
			<TabHeader>
				<Tabs title="HTML" click={handleClick} content="html"/>
				<Tabs title="CSS" click={handleClick} content="css"/>
			</TabHeader>
			<TabContent tabId="html" visible={visible.html}>
				hello
			</TabContent>
			<TabContent tabId="css" visible={visible.css}>
				hey
			</TabContent>
		</div>
	)
}
