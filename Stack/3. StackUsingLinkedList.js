class Node{
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

class StackUsingLinkedList{
    constructor() {
        this.top = null;
    }

    push(x){
        let temp = new Node();

        if(temp == null) {
            return;
        }

        temp.data = x;
        temp.next = this.top;
        this.top = temp;
    };

    isEmpty()  {
        return this.top == null;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.top.data;
        } else {
            return -1;
        }
    }

    pop() {
        if(this.top == null) {
            return;
        }
        this.top = this.top.next;
    }

    display() {
        if(this.top == null) {
            console.log('Stack Underflow');
        } else {
            let temp = this.top;
            while (temp) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}

let obj = new StackUsingLinkedList();
// insert Stack value
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);
 
// print Stack elements
obj.display();
 
// Delete top element of Stack
obj.pop();
obj.pop();
 
// print Stack elements
obj.display();