const { LinkedList } = require('./core/LinkedList.js');


const ll = new LinkedList();
ll.insert(5).insert(90).insert(10).insert(4);
console.log(ll.search(70));
//console.log(ll.deleteAtHead());
//console.log(ll.deleteByValue(90));
console.log(ll.length());

const reverse = (linkedList) => {

    const prevNode = null;
    const currNode = linkedList.head;
    const nextNode = null;

    while (currNode !== null) {
        nextNode = currNode.nextElement;
        currNode.nextElement = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    linkedList.head(previousNode);
}
// Recurssive Search
// const searchinLL = (node, data) => {
//     if (node.data == data) {
//         return true;
//     }
//     else {
//         if (node.nextElement) {
//             return searchinLL(node.nextElement, data);
//         }
//         else {
//             return false;
//         }
//     }
// }

//console.log(searchinLL(ll.head, 9));


