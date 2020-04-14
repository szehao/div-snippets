export const sliderColor = "#ba54ff";
export const sliderBackground = "#d3d3d3";

//Function exports
export const find = (ele) => {
	if(document.querySelector(ele) == null){
		return "Undefined element";
	}
	return document.querySelector(ele);
}

export const findAll = (ele) => {
	if(document.querySelectorAll(ele) == null){
		return "Undefined element";
	}
	return document.querySelectorAll(ele);
}

export const copy = (ele) => {
	const textToCopy = document.getElementById(ele);

    let currentRange;
    if(document.getSelection().rangeCount > 0){
    	currentRange = document.getSelection().getRangeAt(0);
		window.getSelection().removeRange(currentRange);
    }else{
        currentRange = false;
    }
 
	const CopyRange = document.createRange();
	
    CopyRange.selectNode(textToCopy);
    window.getSelection().addRange(CopyRange);
    document.execCommand("copy");
 
    window.getSelection().removeRange(CopyRange);
 
    if(currentRange){
        window.getSelection().addRange(currentRange);
    }
}