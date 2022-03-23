class Node{
    consturtor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root1 = null;
let root2 = null;

const isMirror = (node1, node2) => {
    if(node1 == null && node2 == null) {
        return true;
    }

    if(node1 == null || node2 == null) {
        return false;
    }

    return node1.key == node2.key && 
    isMirror(node1.left, node2.right) && 
    isMirror(node1.right, node2.left);
}

root1 = new Node(1);
root1.left = new Node(3);
root1.right = new Node(2);
root1.right.left = new Node(5);
root1.right.right = new Node(4);

root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);

if(isMirror(root1, root2)) {
    console.log(true);
} else {
    console.log(false);
}

