export const primaryColor = '#ba54ff';
export const backgroundColor = '#edf2f7';
export const sliderBackground = '#d3d3d3';

//Function exports
export const findElement = (ele) => {
	const element = document.querySelector(ele);
	if (element == null) return 'Undefined element';
	return element;
};

export const findAllElement = (ele) => {
	const element = document.querySelectorAll(ele);
	if (element == null) return 'Undefined element';
	return element;
};

export const copyText = (ele, eleToCopy) => {
	if (ele == null || eleToCopy == null) return;
	const elementToCopy = document.getElementById(eleToCopy);

	let currentRange;
	if (document.getSelection().rangeCount > 0) {
		currentRange = document.getSelection().getRangeAt(0);
		window.getSelection().removeRange(currentRange);
	} else {
		currentRange = false;
	}

	const CopyRange = document.createRange();

	CopyRange.selectNode(elementToCopy);
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
		array.map(({ name, value }) => document.documentElement.style.setProperty(name, value));
	} catch (error) {
		console.error(error);
	}
};
