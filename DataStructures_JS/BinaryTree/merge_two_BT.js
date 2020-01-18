class TreeNode {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  //Tree
  class Tree{
  constructor(node){
    this.root = node; 
    this.result = [];//type BinaryTreeNode;
  }
  
  //finidng node;
  find(key, current = this.root){
  
    if(current == null)
      return null;
    if(key == current.value) 
      return current;
  
    if(key < current.value)
      return this.find(key,current.left);
    else
      return this.find(key,current.right);
  
  }
  
  insert(value, current = this.root){
  
    if(value <= current.value){
      if(current.left == null)
        current.left = new TreeNode(value);
      else
        this.insert(value, current.left); 
    }else{
      if(current.right == null)
        current.right =  new TreeNode(value);
      else
        this.insert(value, current.right); 
    }
  
  }
  
  delete(key , current = this.root , parent = null, isLeft){

    if(current.value == key && current !== this.root){

    if(isLeft)
     parent.left = null;
    else
     parent.right = null;
    
    }else if(current.value == key && current == this.root){
      this.root = null;
    }
    
    else if(key < current.value){
      this.delete(key, current.left, current, true);
    }else{
      this.delete(key, current.right, current, false);
    }
    }


  
  //inorder traversal
  traverse(current = this.root){
  if(current != null){
    this.traverse(current.left);
    this.result.push(current.value);
    this.traverse(current.right);
  }
  }
  
  print(){
    console.log(this.result);
  }
}
////////////////////////////////

const mergeBinaryTrees = (node1, node2) => {
if(node1==null)
    return node2;
else if(node2 == null){
    return node1;
}
node2.val = node1.val + node2.val;
node2.left = mergeBinaryTrees(node1.left, node2.left);
node2.right = mergeBinaryTrees(node1.right, node2.right);
return node2;
}



//Test
const bn = new TreeNode(108);
const bt = new Tree(bn);
bt.insert(108);
bt.insert(283);
bt.insert(10);
bt.insert(102);
bt.insert(14);
bt.insert(2);
bt.insert(285);
bt.insert(243);
bt.insert(401);

const bn2 = new TreeNode(108);
const bt2 = new Tree(bn2);
bt2.insert(108);
bt2.insert(283);
bt2.insert(10);
bt2.insert(102);
bt2.insert(14);
bt2.insert(2);
bt2.insert(1);
bt2.insert(285);
bt2.insert(243);
bt2.insert(401);

const mergednode = mergeBinaryTrees(bn,bn2);
const mergedtree = new Tree(mergednode);
mergedtree.traverse();
mergedtree.print();