function reverseAList(headofNode){

var currentNode = headofNode;
var nextNode = null;
var previousNode = null;

while(currentNode){
//setting nodes
nextNode = currentNode.next;
currentNode.next = previousNode;
//moving nodes further
previousNode = currentNode;
currentNode = nextNode;

}
return previousNode;
}
