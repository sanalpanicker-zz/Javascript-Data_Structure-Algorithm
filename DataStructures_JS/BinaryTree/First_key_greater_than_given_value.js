
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
/////////////////////////////////////////////////


//using while loop
const findGreaterKey = (val, node) => {
    let currentMax = null;
    while(node!==null){
        if(node.value > val){
            currentMax = node.value;
        node  = node.left;
        }else{
            node = node.right;
        }
    }
    return currentMax;
}

//using recurssion
const findGreaterHealper = (m,v,n) =>{
    
    if(n==null){
    return m;
    }

    if(n.value > v){
        m = n.value;
       return  findGreaterHealper(m,v,n.left);
    }else{
       return  findGreaterHealper(m,v,n.right);
    }
}

const rfindGreaterKey = (val, node) => {
    let currentMax = null;
    return findGreaterHealper(currentMax, val, node);
}

//Test

const bn = new TreeNode(20);
const bt = new Tree(bn);
bt.insert(15);
bt.insert(25);
bt.insert(19);
bt.insert(14);
bt.insert(100);
bt.insert(60);
bt.insert(23);

console.log(findGreaterKey(23,bn));
console.log(rfindGreaterKey(23,bn));