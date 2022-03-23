class Node {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root = null;

const printLevelOrder = () => {
    let queue = [];
    queue.push(root);
    let queueData = [];

    while (queue.length != 0) {
        let tempNode = queue.shift();
        // console.log(tempNode.key);
        queueData.push(tempNode.key);

        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
    console.log(queueData);
};


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrder();