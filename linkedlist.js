const Node = function() {
	let value = null;
	let nextNode = null;

	return {value, nextNode};
};

const LinkedList = function() {
	let headPointer = null;
	let tailPointer = null;

	const append = function(value) {
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

	const prepend = function(value) {
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

	const head = function() {
		return headPointer;
	}

	const tail = function() {
		return tailPointer;
	}
	
	return {append, prepend, head, tail}
};

//const a = LinkedList();
//a.append(1);
//a.append(2);
//a.prepend(4);
//console.log(a.head());
//console.log(a.tail());