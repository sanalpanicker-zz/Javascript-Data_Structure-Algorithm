// implement Graph using the adjancency list model
const { LinkedList, Node } = require('../LinkedList/core/LinkedList');

class Graph {

    constructor(vertices) {
        // total number of vertices
        this.vertices = vertices;
        // Array of linkedlist to store the adjacent vertices
        this.list = [];
        // Create an Arrray of linkedList
        this._createList();
    }

    _createList() {
        for (let i = 0; i < this.vertices; i++) {
            this.list.push(new LinkedList());
        }
    }

    printGraph() {
        console.log(' ** Adjacency List of Directed Graph ** ');
        this.list.forEach((linkedList, vertice) => {
            console.log(` ${vertice} --> ${linkedList.getStringifiedLinkedList()}`);
        })
    }

    addEdge(source, destination) {
        // for directed graph
        this.list[source].insertAtHead(destination);
        // undirected grpah
        // this.list[destination].insertAtHead(source);
    }
}

module.exports = Graph;
