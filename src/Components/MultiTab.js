import React from 'react'
import Tabs from "./Tabs"
import TabContent from "./TabContent"
import "../Css/multitab.scss";

export default function MultiTab() {

	const handleClick = () => {
		
	}

	return (
		<div className="multiTab-container">
			<div className="tab-header">
				<Tabs title="HTML" click={handleClick}/>
				<Tabs title="CSS" click={handleClick}/>
			</div>
			<div className="tab-content">
				<TabContent>

				</TabContent>
				<TabContent>

				</TabContent>
			</div>
		</div>
	)
}
