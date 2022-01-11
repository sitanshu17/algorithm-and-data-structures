/**
 * Middle Of Linked List.
 * Input : 1 -> 2 -> 3 -> 4 ->  5
 * Output : 3
 */
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
        newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
}

const PrintLinkedList = () => {
    if(head == null){
        return;
    } else {
        let temp = head;
        let result = '';
        while (temp) {
            result = result + temp.data + ' ';
            temp = temp.next;
        }
        console.log(result);
    }
}

const MiddleOfLinkedList = () => {
    if(head == null) {
        return;
    } else {
        let slow = head;
        let fast = head;

        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log('Middle Element: ', slow.data);
    }
}

addNodeAtStart(5);
addNodeAtStart(4);
addNodeAtStart(3);
addNodeAtStart(2);
addNodeAtStart(1);
PrintLinkedList();
MiddleOfLinkedList();


