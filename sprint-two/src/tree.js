 var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {
};

treeMethods.addChild = function(value) {
    this.children.push(new Tree(value));
};

treeMethods.contains = function(target, currentNode, flag) {
    currentNode = currentNode || this;
   flag = flag || false ;
	if (currentNode.value === target) {
		return true;
	}

	for (var i = 0; i <  currentNode.children.length; i++) {
	       if(flag)
	       return true;
	   
		  flag = currentNode.contains( target, currentNode.children[i],flag);
	}
return flag;
}


var tree = Tree(1);

tree.addChild(2);
tree.children[0].addChild(7);
tree.addChild(9);





/*
 * Complexity: What is the time complexity of the above functions?
 * addChild (1)
 * contains (1)
 * innerSearch (N)
 */