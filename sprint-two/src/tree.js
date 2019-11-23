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
    this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
	if(this.value === target)
		return true;
    return innerSearch (target,this.children)

}
var innerSearch = function(target, child){
  var found = found || false;
  for (var i in child) {
  	if(child[i].value  === target){
  		return found = true;
  	}
  	else{
  	found = innerSearch(target,child[i].children) || found;
  	}
  }
return found;

};	



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild (1)
 * contains (1)
 * innerSearch (N)
 */