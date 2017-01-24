// http://stackoverflow.com/questions/25476071/closure-versus-regular-constructor-function-for-creating-private-properties
function TreeNode(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
}

TreeNode.prototype.getDepth = function() {
	var depth = 0;
	var parent = this.parent;
	while (parent) {		
		depth++;
		parent = parent.parent;
	}
	return depth;
}

function Tree(data) {
	this.root = new TreeNode(data);
	this.size = 1;
}

Tree.prototype.add = function(data, parentIdentifier) {
	var node = new TreeNode(data);
	var parent;
	
	// find parent node using node id and assign parent node to parent property
	var assignParent = function(currentNode, returnFromMatch) {
		if (currentNode.data.id === parentIdentifier) {
			parent = currentNode;
			returnFromMatch.val = true;
		}
	}
	this.contains(assignParent, this.traverseBF);
	
	if (parent) {
		parent.children.push(node);
		node.parent = parent;
		this.size++;
		//return node;
	}
	else {
		throw "Specified node does not exist";
	}
	// NOTE return here causes program to freeze
};

/* Apply callback function to node specified in callback if said node exists
 * callback a callback function
 * traversalMethod algorithm used to traverse tree
 */
Tree.prototype.contains = function(callback, traversalMethod) {
	traversalMethod.call(this, callback);	// bind this to the tree object the function is being called on for traversal method
};

/* Traverse the tree using a breadth-first search
 * note that shift method runs in O(n) and is slow for large queues
 * callback a callback function
 */
Tree.prototype.traverseBF = function(callback) {
	var queue = [];
	var returnFromMatch = { val : false };			// allows callback to end the traversal by changing the val property
	queue.push(this.root);
	currentNode = queue.shift();
	
	while (currentNode) {
		for (var i = 0; i < currentNode.children.length; i++) {
			queue.push(currentNode.children[i]);
		}
		
		if (typeof callback === "function") {
			callback(currentNode, returnFromMatch);				// do something with the current node, specified by the callback
			if (returnFromMatch.val)
				return;
		}
		currentNode = queue.shift();
	}
};