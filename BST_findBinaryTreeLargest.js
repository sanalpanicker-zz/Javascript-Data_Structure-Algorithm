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

    if (!node) {
        throw new Error("there should be atleast a ndoe");
    }

    if (node.right) {
        return recursiveFindBiggestInBinaryTree(node.right)
    } else {
        return node.value;
    }
}

console.log(recursiveFindBiggestInBinaryTree(rootNode));