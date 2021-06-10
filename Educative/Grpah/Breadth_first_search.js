const Graph = require('./graph');
const LinkedList = require('../LinkedList/core/LinkedList');
const Queue = require('../Stacks/queue');

const printer = [];

const bfsTraversal_helper = (graph, vertex, visited) => {
    let queue = new Queue();
    queue.enqueue(vertex);
    visited[vertex] = true;
    while (!queue.isEmpty()) {
        let currentVertex = queue.dequeue();
        printer.push(currentVertex);
        let adjacentVertex = graph.list[currentVertex].getHead();
        while (adjacentVertex !== null) {
            if (!Boolean(visited[adjacentVertex.data])) {
                queue.enqueue(adjacentVertex.data);
                visited[adjacentVertex.data] = true;
            }
            adjacentVertex = adjacentVertex.nextElement;
        }
    }
}

const bfsTraversal = (graph) => {

    if (graph.vertices < 1) {
        return null;
    }

    // make a lookup array to hold the list of visited nodes
    const visited = new Array(graph.vertices).map((vertex) => 'false');

    graph.list.forEach((linkedList, vertex) => {
        if (!Boolean(visited[vertex])) {
            bfsTraversal_helper(graph, vertex, visited);
        }
    })
}


let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 4);
g.addEdge(1, 3);

bfsTraversal(g);

console.log(printer.join(' '));
