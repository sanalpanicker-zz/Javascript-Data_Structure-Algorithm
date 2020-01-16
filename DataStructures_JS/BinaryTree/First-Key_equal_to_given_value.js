

//refer page 226 EPI

class TreeNode {
    constructor(value){
      this.value = value;
      this.key=null;
      this.left = null;
      this.right = null;
    }
  }
  //Tree
  class Tree{
  constructor(node){
      this.counter = 0;
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
      if(current.left == null){
        current.left = new TreeNode(value);
        current.key = this.counter++;
       } else
        this.insert(value, current.left); 
    }else{
      if(current.right == null){
        current.right =  new TreeNode(value);
        current.key = this.counter++;
      }
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
    this.result.push({"value" : current.value, "key" : current.key});
    this.traverse(current.right);
  }
  }
  
  print(){
   return this.result;
  
  }
}
/////////////////////////////////////////////////

const findFirstEqaulTo = (value, node) => {

let firstVal = null;
    while(node!==null){
        if(node.value >= value){
                    //only keep looking the right if its equal to becuase its going to be the minimum and appear first in an inorder traversal.
            if(node.value == value){
                firstVal =  node.key;
            }
            node = node.left;
        }else{
            node= node.right;
        }
    }
    return firstVal;
}


//Test

const bn = new TreeNode(108);
const bt = new Tree(bn);
bt.insert(108);
bt.insert(285);
bt.insert(10);
bt.insert(108);
bt.insert(14);
bt.insert(2);
bt.insert(285);
bt.insert(243);
bt.insert(401);
bt.traverse();
const treeArr = bt.print();
treeArr.map((obj)=>{
console.log(obj.value, obj.key);
})
console.log(findFirstEqaulTo(285,bn));
// console.log(rfindGreaterKey(23,bn));