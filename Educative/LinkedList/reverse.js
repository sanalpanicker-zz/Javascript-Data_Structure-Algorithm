const { LinkedList } = require('./core/LinkedList.js');

const reverse = (lli) => {
    let prevNode = null
    let currNode = lli.head;
    let nextNode = null;
    while (currNode) {
        prevNode = currNode.nextElement;
        currNode.nextElement = nextNode;
        nextNode = currNode
        currNode = prevNode;
    }
    ll.head = nextNode;
    return ll;
}
const ll = new LinkedList();
ll.insert(5).insert(90).insert(10).insert(4);
//reverse(ll)
console.log(JSON.stringify(reverse(ll)));