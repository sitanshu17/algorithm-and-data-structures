/**
 * 1. Insert Node at head of Linked List.
 * 2. Insert Node at end of Linked List.
 * 3. Count length of Linked List.
 * 4. Print Linked List.
 * 5. insert after any particular node.
 */

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = null;
// const addNodeAtEnd = (element) => {
//     const node = new Node(element);

//     if (head == null) {
//         head = node;
//     } else {
//         current = head;
//         while (current.next != null) {
//             current = current.next;
//         }
//         current.next = node;
//     }
// };

// const addNodeAtStart = (element) => {
//     const node = new Node(element);

//     if (head == null) {
//         head = node;
//     } else {
//         node.next = head;
//         head = node;
//     }
// }

// const printLinkedList = () => {
//     temp = head;
//     let result = '';
//     while (temp) {
//         result = result + temp.data + ' ';
//         temp = temp.next;
//     }
//     return result;
// }

// const insertAfterNode = (insertAfterNode, data) => {
//     const newNode = new Node(data);

//     if (insertAfterNode) {
//         newNode.next = insertAfterNode.next;
//         insertAfterNode.next = newNode;
//     }
// }

// const LengthOfLinkedList = () => {
//     if (head == null) {
//         return 0;
//     } else {
//         let temp = head;
//         let count = 0;
//         while (temp) {
//             count++;
//             temp = temp.next;
//         }
//         return count;
//     }
// }

// addNodeAtStart(5);
// addNodeAtStart(4);
// addNodeAtStart(3);
// addNodeAtStart(2);
// addNodeAtStart(1);
// addNodeAtEnd(6);
// addNodeAtStart(7);
// insertAfterNode(head.next.next, 0);
// console.log(printLinkedList());
// console.log(LengthOfLinkedList());


class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

const AddNodeAtStart = (element) => {
    let newNode = new Node(element);

    if(head == null) {
        head = newNode;
    } else {
        newNode.next = head;
        newNode = head;
    }
}

const AddNodeAtEnd = (element) => {
    let newNode = new Node(element);

    if(head == null) {
        head = newNode;
    } else {
        let temp = head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
};

const PrintLinkedList = (head) => {
    let temp = head;
    let linkedLIstElements = [];
    while(temp) {
        linkedLIstElements.push(temp.data);
        temp = temp.next;
    }
    console.log('Linked List element: ', temp);
};

const InsertAfterNode = (insertAfterNode, data) => {
    if(insertAfterNode) {
        let newNode = new Node(data);
        newNode.next = insertAfterNode.next;
        insertAfterNode.next = newNode;
    }
};

const LengthOfLinkedList = (head) => {
    if(head == null) {
        return 0;
    } else {
        let temp = head;
        let count = 0;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
    }
}

AddNodeAtStart(5);
AddNodeAtStart(4);
AddNodeAtStart(3);
AddNodeAtStart(2);
AddNodeAtStart(1);
AddNodeAtEnd(6);
AddNodeAtStart(7);
InsertAfterNode(head.next.next, 0);
console.log(PrintLinkedList(head));
console.log(LengthOfLinkedList(head));
