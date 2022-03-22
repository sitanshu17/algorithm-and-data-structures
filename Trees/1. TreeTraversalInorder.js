class Node {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root = null;

// Preorder => root, left, right.
const printPreOrder = (node) => {
    if(node == null) {
        return;
    };
    console.log(node.key + ' ');
    printPreOrder(node.left);
    printPreOrder(node.right);
};

// Inorder => left, data, right.
const printInOrder = (node) => {
    if(node == null) {
        return;
    };
    printInOrder(node.left);
    console.log(node.key + ' ');
    printInOrder(node.right);
};

// PostOrder => left, right, data.
const printPostOrder = (node) => {
    if(node == null) {
        return;
    }
    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

printPreOrder(root);
console.log('-------------------');
printInOrder(root);
console.log('-------------------');
printPostOrder(root);