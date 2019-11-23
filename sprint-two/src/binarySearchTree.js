class BinarySearchTree{
	constructor(value){
  	this.value = value;
  	this.right = null;
  	this.left = null;
	}

  innerInsert(value, node){
		if (node === null) {
			node = new BinarySearchTree(value);
		}
		else if (node.value > value) {
			this.innerInsert(value, node.right);
		}
		else if (node.value < value){
		  innerInsert(value, node.left);
		}
		return;
	};

	insert(value){
     if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
	};
  
  contains(value){

  };
  depthFirstLog(){

  };

	


} 
var BST = new BinarySearchTree(10);














/*
 * Complexity: What is the time complexity of the above functions?
 */

