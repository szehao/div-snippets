export const primaryColor = '#ba54ff';
export const backgroundColor = '#edf2f7';
export const sliderBackground = '#d3d3d3';

//Function exports
export const find = (ele) => {
	if (document.querySelector(ele) == null) {
		return 'Undefined element';
	}
	return document.querySelector(ele);
};

export const findAll = (ele) => {
	if (document.querySelectorAll(ele) == null) {
		return 'Undefined element';
	}
	return document.querySelectorAll(ele);
};

export const copyText = (ele, eleCopy) => {
	const textToCopy = document.getElementById(eleCopy);

	let currentRange;
	if (document.getSelection().rangeCount > 0) {
		currentRange = document.getSelection().getRangeAt(0);
		window.getSelection().removeRange(currentRange);
	} else {
		currentRange = false;
	}

	const CopyRange = document.createRange();

	CopyRange.selectNode(textToCopy);
	window.getSelection().addRange(CopyRange);
	document.execCommand('copy');

	window.getSelection().removeRange(CopyRange);

	if (currentRange) {
		window.getSelection().addRange(currentRange);
	}

	//Triangle animation

	const triangle = ele.target.previousSibling;
	triangle.style.display = 'flex';
	triangle.style.animation = 'fadeOut 2s ease';
	setTimeout(() => (triangle.style.display = 'none'), 2000);
};

export const setRootVariables = (array) => {
	try {
		array.map((object) => document.documentElement.style.setProperty(object.name, object.value));
	} catch (error) {
		console.error(error);
	}
};
