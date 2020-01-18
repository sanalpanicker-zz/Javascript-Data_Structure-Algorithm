
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

const reverseInorder = (node, Klargestelements, limit) =>{
    if(node !== null && Klargestelements.length < limit ){
        reverseInorder(node.right,Klargestelements, limit);
        if(Klargestelements.length < limit){
            Klargestelements.push(node.value);
            reverseInorder(node.left,Klargestelements, limit);
        }
    }
}
const findTheKthlargest = (limit,node ) =>{
    const Klargestelements = [];
    reverseInorder(node,Klargestelements,limit);
    return   Klargestelements;
}

/////////////////////////////////////////////////////////
const inOrder = (node, Ksamllestelements, limit) =>{
    if(node !== null && Ksamllestelements.length < limit ){
        inOrder(node.left,Ksamllestelements, limit);
        if(Ksamllestelements.length < limit){
            Ksamllestelements.push(node.value);
            inOrder(node.right,Ksamllestelements, limit);
        }
    }
}
const findTheKthLowest = (limit,node ) =>{
    const Ksamllestelements = [];
    inOrder(node,Ksamllestelements,limit);
    return   Ksamllestelements;
}

//Test

const bn = new TreeNode(108);
const bt = new Tree(bn);
bt.insert(108);
bt.insert(285);
bt.insert(-10);
bt.insert(108);
bt.insert(-14);
bt.insert(-2);
bt.insert(285);
bt.insert(243);
bt.insert(401);

console.log(findTheKthlargest(3,bn));
console.log(findTheKthLowest(3,bn));