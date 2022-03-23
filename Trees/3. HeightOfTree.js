class Node{
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}


let root = null;

const HeightOfBinaryTree = (node) => {
    if(node == null) {
        return -1;
    } else {
        let leftHeight = HeightOfBinaryTree(node.left);
        let rightHeight = HeightOfBinaryTree(node.right);

        if(leftHeight > rightHeight) {
            return (leftHeight + 1);
        } else {
            return (rightHeight + 1);
        }
    }
};

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(HeightOfBinaryTree(root));