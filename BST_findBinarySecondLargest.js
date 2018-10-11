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

const findLargest = (node) => {

    if (!node) {
        throw new Error("The root should be present");
    }
    if (node.right) {
        return findLarget(node.right);
    } else {
        return node.value;
    }
}


const find2ndLargestItem = (rootNode) => {

    if (!rootNode || !rootNode.right && !rootNode.left) {
        throw new Error("The root should atleast have 2 nodes");
    }

    let current = rootNode;

    while (current) {
      // Case: current is largest and has a left subtree
        // 2nd largest is the largest in that subtree

        if (!current.right && current.left) {
            return findLargest(current.left);
        }
        // Case: current is parent of largest, and largest has no children,
        // so current is 2nd largest
        if (current.right && !current.right.right && !current.right.left) {
            return current.value;
        }
        current = current.right;
    }
}

console.log(find2ndLargestItem(rootNode));
