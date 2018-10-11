// write a binary Tree implementaion in JS
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }
    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

const isBalance = (rootNode) => {
    if (!rootNode) {
        return true;
    }
    // we short-circuit as soon as the depth is more than 2
    const depths = [];
    // nodes will store pairs of a node and the nodes depth
    const nodes = [];
    nodes.push([rootNode, 0]);
    while (nodes.length) {
        const nodePair = nodes.pop();
        const node = nodePair[0];
        const depth = nodePair[1];
        if (!node.left && !node.right) {
            if (depths.indexOf(depth) < 0) {
                depths.push(depth);
            }
            if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                return false;
            }

        } else {
            if (node.left) {
                nodes.push([node.left, depth + 1])
            }
            if (node.right) {
                nodes.push([node.right, depth + 1])
            }
        }

    }
    return true;
}

let root = new BinaryTreeNode(5);
root.insertLeft(1).insertLeft(3).insertLeft(7);
root.insertRight(2).insertRight(4).insertRight(6).insertRight(8);


console.log(isBalance(root));