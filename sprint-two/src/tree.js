
 var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newNode = new Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
	for (var element in this.children) {
		console.log(element);
		if(this.children[element].value === target) {
			return true;
		}else{
			return this.children[element].contains(target);
		}
}
};	



/*
 * Complexity: What is the time complexity of the above functions?
 */



// 	if (this.children.length - 1 !== 0) {
// 	for (var i in this.children) {
// 		if (i.value === target) {
// 			return true;
// 		}
// 		if (i.children.contains(target)) {
// 			return true;
// 		}
// 	}
// }
// if (this.children.length - 1 === 0) {
// 	return false;
// }