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



const BSTfromInorder = (inorderArr) =>{
    

}


//https://www.geeksforgeeks.org/construct-binary-tree-from-inorder-traversal/
BSTfromInorder([5, 10, 40, 30, 28]);