/**
 * Given a singly linked list of size N of integers. The task is to check if the given linked list is palindrome or not.

    Example 1:

    Input:
        N = 3
        value[] = {1,2,1}
        Output: 1
        Explanation: The given linked list is
        1 2 1 , which is a palindrome and
        Hence, the output is 1.
    Example 2:

    Input:
        N = 4
        value[] = {1,2,3,4}
    Output: 0
    Explanation: The given linked list
    is 1 2 3 4 , which is not a palindrome
and Hence, the output is 0.
 */

// var stack = [];
// stack.push(2);       // stack is now [2]
// stack.push(5);       // stack is now [2, 5]
// var i = stack.pop(); // stack is now [2]
// console.log(i);            // displays 5

// var queue = [];
// queue.push(2);         // queue is now [2]
// queue.push(5);         // queue is now [2, 5]
// var i = queue.shift(); // queue is now [5]
// console.log(i);             // displays 2


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
};


const PrintLinkedList = () => {
    let temp = head;
    if(!temp) {
        return 'Empty Linked List';
    } else {
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result);
    }
};

const PalindromeCheck = () => {
    let temp = head;
    let stack = [];
    while(temp) {
        stack.push(temp.data);
        temp = temp.next;
    }
    let isPalindrome = true;
    temp = head;
    while(temp) {
        let tempData = stack.pop();
        if(tempData !== temp.data) {
            return false;
        }
        temp = temp.next;
    }
    return isPalindrome;
}

addNodeAtStart(5);
addNodeAtStart(4);
addNodeAtStart(3);
addNodeAtStart(2);
addNodeAtStart(1);
PrintLinkedList();
console.log(PalindromeCheck());
