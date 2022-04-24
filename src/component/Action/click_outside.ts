/** 
 * Like transition functions, an action function receives a node (which is the element that the action is applied to) 
 * and some optional parameters, and returns an action object. 
 * That object can have a destroy function, which is called when the element is unmounted.
	*/
export function clickOutside(node: HTMLDivElement) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
