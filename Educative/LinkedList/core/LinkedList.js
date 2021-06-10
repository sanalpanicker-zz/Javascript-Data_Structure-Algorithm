/**
 *LisnkedList class
 * */
class LinkedList {
    constructor() {
        this.head = null
    }
    //check if the linkedList is empty
    isEmpty() {
        // if the head is null return true
        return (this.head == null);
    }

    getHead() {
        return this.head;
    }

    insertAtHead(data) {
        const tempNode = new Node(data);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this;
    }

    insert(data) {
        if (!this.head) {
            this.head = new Node(data);
            return this;
        } else {
            const tailNode = this._getTailNode(this.head);
            tailNode.nextElement = new Node(data);
            return this;
        }
    }

    deleteAtHead() {
        this.head = (this.head && this.head.nextElement) ? this.head.nextElement : null;
        return this;
    }

    length() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            size++;
            currentNode = currentNode.nextElement;
        }
        return size;
    }

    deleteByValue(value) {
        let currentNode = this.head;
        while (currentNode.nextElement !== null) {
            if (currentNode.nextElement.data == value) {
                currentNode.nextElement = currentNode.nextElement.nextElement;
                return this;
            }
            currentNode = currentNode.nextElement;
        }
        return this;
    }


    getStringifiedLinkedList() {
        let stringifiedLinkedList = '';
        let currentNode = this.head;
        while (currentNode !== null) {
            stringifiedLinkedList += `[ ${currentNode.data} ] --> `;
            currentNode = currentNode.nextElement;
        }
        return `${stringifiedLinkedList} [null]`;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data == value) {
                return true;
            }
            currentNode = currentNode.nextElement;
        }
        return false;
    }

    insertAtNth(data, postion) {
    }
    _getTailNode(node) {
        if (!node.nextElement)
            return node;
        else {
            return this._getTailNode(node.nextElement);
        }
    }
}
/**
 * Node class to be inserted into the LinkedList
 */
class Node {
    constructor(data) {
        this.data = data
        this.nextElement = null; //node type
    }
}

module.exports = {
    LinkedList,
    Node
}