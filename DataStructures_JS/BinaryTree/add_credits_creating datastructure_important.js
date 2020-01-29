//each node
class TreeNode {
    constructor(value, key){
        this.clientSet = new Set();
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
      return current.clientSet;
  
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

/////////////////
class ClientCreditsInfo{

offset = 0;
lookUpMap = new Map();
clientTree = new Tree();

//inset client with credits
insert= (clientID, credit) =>{
    lookUpMap.set(clientID, credit - offset);
    clientTree.insert(new TreeNode(clientID,credit - offset));
}

//removing clientID functionality
remove = (clientID) =>{
    const clientCredit = lookUpMap.get(clientID);
    if(clientCredit){
        if(!clientTree.find(clientCredit)){
            clientTree.delete(clientCredit);
        }else{
            clientTree.find(clientCredit).remove(clientID); // the fact that there can be multiple clients with the same credit; so we modify treenode to hold a key and a set of clientIds.
        }
        lookUpMap.delete(clientID); // removing the entry from lookup as well
    return true;
    }
    return false;
}

//Add credit fucntionality
addAll = (val) =>{
    offset+=val;
}

//credit lookup for clientId
lookup =(clientId) =>{
    const clientCredit = lookUpMap.get(clientID);
    return clientCredit ? clientCredit+offset : -1;
}

//find the client with max credits
//in a BST it will be the right most leaf node. will need to do a traversal --> but we are going to assume we have the lastEntry method
max = () =>{
    // the getValue() will restun the set of clientIds and interator.next will give the first value;
return clienttree ? clienttree.lastEntry().getValue().iterator().next() : "";
}


}