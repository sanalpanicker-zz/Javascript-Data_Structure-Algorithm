function LinkedListNode(value){
    this.value= value;
    this.next = null;
}


var a = new LinkedListNode("A");
var b = new LinkedListNode("B");
var c = new LinkedListNode("C");

a.next = b;
b.next = c;


//write a program that deletes the node b.

//in linkedList to delete a node you just need to chnage the referce of that node to the next node.

function deleteNode(nodeToBeDeleted){

var nextNode = nodeToBeDeleted.next;

if(nextNode){

nodeToBeDeleted.value = nextNode.value;
nodeToBeDeleted.next = nextNode.next;

}else{
    throw new Error ("cant delete the last node with this method!");
}
}