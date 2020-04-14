import React, { useState, useEffect } from 'react';
import {findAll} from "../constants"
import "../Css/multitab.scss";

export default function MultiTab( {children} ) {

	
	const [errorMsg, setErrorMsg] = useState(null);
	const [clonedChildren, setClonedChildren] = useState(null);

	useEffect(() => {	
			
		// Check if Children passed is valid
		try{
			if(!Array.isArray(children)){
				throw new Error("MultiTab must have at least 2 children");	
			}			
			if(children[0].type.name !== "TabHeader"){
				throw new Error("TabHeader must come before TabContents");
			}
			if(children.length-1 !== children[0].props.children.length){
				throw new Error("Number of TabContents must be the same as Tabs");
			}
			// If all condition passes, create function
			const handleClick = (e,contentName) => {
			findAll(".tab-content").forEach((ele) => {ele.style.display = "none"});
				// Checks to make sure id passed by TabContents is same as TabHeader
				try{					
					if(document.getElementById(contentName) === null){
						throw new Error("TabContent must have an ID that matches Tabs");
					}
					const tabs = findAll(".tab-title");
					let tabCount = tabs.length;
					tabs.forEach((tab, index) => {
						if(tab === e.target){
							let left = 0;
							if(index > 0){
								left = ((index)/tabCount)*100 + "%";
							}
							document.getElementById("active-border").style.left = left;
						}
					})
					document.getElementById(contentName).style.display = "flex";
					
				}catch(error){
					setErrorMsg(error.message);
				}
			}
			// Clones children element and adds prop
			const cloneElement = (ele) => {
				if(ele.type.name === "TabHeader"){
					//Find grandChildren
					let clonedGrandChildren = React.Children.map(ele.props.children, grandchild => 
						//Cloned grandChildren
						React.cloneElement(grandchild, {
							click : handleClick,
							style : {width : 100/ele.props.children.length + "%"} //Calculates width based on amount of children
						})
					);
					//Cloned element with modified children prop
					return React.cloneElement(ele, {children : clonedGrandChildren});
				}
				return ele;
			}
			// Loop through and clone children
			setClonedChildren(React.Children.map(children, child => cloneElement(child)));
		}catch(error){
			setErrorMsg(error.message);
		}	
	}, [children]);
	
	return (
		<div className="multiTab-container">		
			{errorMsg !== null? errorMsg : clonedChildren}
		</div>
	)
}
