
// recursive approach checking with range
const isBST = (node, max, min) => {

    if(node == null){
        return true;
    }
    if(node.value > max || node.value < min){
        return false;
    }
    return isBST(node.left, node.value, min) && isBST(node.right, max, node.value);
}

// second recurssive approch using the inorder traversal

const isBSTInOrder = (node, prevNode) =>{
    if(node == null){
        return true;
    }
if(node.value > prevNode.value){
    return false;
}
    return isBSTInOrder(node.left, node) && isBSTInOrder(node, node.right)
}



//non -recurrsive approach using array as a call stack



const checkBST = (bst) => {
    current = bst.root;
    return isBST(current, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
}



