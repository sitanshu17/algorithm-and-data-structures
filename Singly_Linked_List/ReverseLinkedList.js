class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

const addNodeAtStart = (data) => {
    if(head == null) {
        head = new Node(data);
    } else {
        let newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
}

const PrintLinkedList = () => {
    if(head == null) {
        return;
    }
    let temp = head;
    let result = '';
    while (temp) {
        result = result + temp.data + ' ';
        temp = temp.next;
    }
    console.log(result);
}

const ReverseLinkedList = () => {
    if(head == null) {
        return;
    }
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
}

addNodeAtStart(5);
addNodeAtStart(4);
addNodeAtStart(3);
addNodeAtStart(2);
addNodeAtStart(1);
PrintLinkedList();
ReverseLinkedList();
PrintLinkedList();