class BinaryTrees {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }

    insertLeft(value) {
        this.left = new BinaryTrees(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTrees(value);
        return this.right;

    }
}


let rootNode = new BinaryTrees(80);
let left1 = rootNode.insertLeft(60);
left1.insertLeft(30);
left1.insertRight(70);
let right1 = rootNode.insertRight(90);
right1.insertLeft(85);
right1.insertRight(100);

// using fucntion itself as a call stack
// find the largest node in binaryTree
const recursiveFindBiggestInBinaryTree = (node) => {

    if(!node){
        throw new Error("there should be atleast a ndoe");
    }

    if(node.right){
        return recursiveFindBiggestInBinaryTree(node. right)
    }
    else{
        return node.value;
    }
}

//using array as a callstack - non-recursive method
const checkIfBinaryTree = (rootNode) => {

    const nodeAndBounds = [];
    nodeAndBounds.push({
        node: rootNode,
        upperBound: Number.POSITIVE_INFINITY,
        lowerBound: Number.NEGATIVE_INFINITY
    });

    while (nodeAndBounds.length) {
        const obj = nodeAndBounds.pop();

        if (obj.node.value <= obj.lowerBound || obj.node.value >= obj.upperBound) {
            return false;
        }

        if (obj.node.left) {
            nodeAndBounds.push({
                node: obj.node.left,
                upperBound: obj.node.value,
                lowerBound: obj.lowerBound
            })
        }

        if (obj.node.right) {
            nodeAndBounds.push({
                node: obj.node.right,
                upperBound: obj.upperBound,
                lowerBound: obj.node.value,
            })
        }

    }
    return true;
}

console.log(checkIfBinaryTree(rootNode));