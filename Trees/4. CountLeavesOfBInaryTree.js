class Node{
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root = null;

const CountLeavesOfBinaryTree = (node) => {
    if(node == null) {
        return 0;
    } else if(node.left == null && node.right == null) {
        return 1;
    } else {
        return CountLeavesOfBinaryTree(node.left) + CountLeavesOfBinaryTree(node.right);
    }
};

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(CountLeavesOfBinaryTree(root));