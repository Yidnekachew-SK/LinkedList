const Node = function () {
	let value = null;
	let nextNode = null;

	return {value, nextNode};
};

const LinkedList = function () {
	let headPointer = null;
	let tailPointer = null;

	const append = function (value) {
		const newNode = Node();
		newNode.value = value;

		if(headPointer === null) {
			headPointer = newNode;
			tailPointer = newNode;
			newNode.nextNode = null;
		} else {
			tailPointer.nextNode = newNode;
			tailPointer = newNode;
		}
	}

	const prepend = function (value) {
		const newNode = Node();
		newNode.value = value;

		if(headPointer === null) {
			headPointer = newNode;
			tailPointer = newNode;
		} else {
			newNode.nextNode = headPointer;
			headPointer = newNode;
		}
	}

	const size = function () {
		let numOfNodes = 0;
		let currentNode = headPointer;
		if (headPointer === null) {
			return numOfNodes;
		} else {
			numOfNodes = 1;
		}

		while(currentNode.nextNode != null) {
			currentNode = currentNode.nextNode;
			numOfNodes++;
		}

		return numOfNodes;
	}

	const head = function () {
		return headPointer;
	}

	const tail = function () {
		return tailPointer;
	}

	const at = function (index) {
		let currentNode = headPointer;
		let currentIndex = 0;

		if (size() === 0) {
			return "no linked list";
		} else if (index > size()) {
			return "index is larger than linked list size";
		} else if (index === 0) {
			return headPointer;
		}

		while (currentIndex < index) {
			currentNode = currentNode.nextNode;
			currentIndex++;
		}

		return currentNode;
	}

	const pop = function () {
		let currentNode = headPointer;
		let previousNode = null;
		if (tailPointer === null) { return };
		
		while (currentNode.nextNode != null) {
			previousNode = currentNode;
			currentNode = currentNode.nextNode;
		}
		previousNode.nextNode = null;

		return head()
	}

	const contains = function (value) {
		let currentNode = headPointer;
		let isFound = false;

		if (size() === 0) {
			return false;
		} else if (currentNode.value === value) {
			return true;
		}

		while (currentNode.nextNode != null && !isFound) {
			if (currentNode.nextNode.value === value) {
				isFound = true;
			} else {
				currentNode = currentNode.nextNode;
			}
		}

		return isFound;
	}

	const find = function (value) {
		let currentNode = headPointer;
		let currentIndex = 0;
		if (size() === 0) { return "no linked list" };

		while (currentIndex < size()) {
			if (currentNode.value === value) {
				return currentIndex;
			} else {
				currentNode = currentNode.nextNode;
				currentIndex++;
			}
		}

		return null;
	}

	const toString = function () {
		let currentNode = headPointer;
		let formattedString = ``;
		if (size() === 0) { return };

		while (currentNode != null) {
			formattedString += `( ${currentNode.value} ) -> `;
			currentNode = currentNode.nextNode;
		}
		formattedString += `null`;

		return formattedString;

	}
	
	return {append, prepend, size, head, tail, at, pop, contains, find, toString}
};
