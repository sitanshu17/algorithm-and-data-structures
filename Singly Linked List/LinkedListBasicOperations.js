    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    let head = null;
    const addNodeAtEnd = (element) => {
        const node = new Node(element);

        if(head == null) {
            head = node;
        } else {
            current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    };

    const addNodeAtStart = (element) => {
        const node = new Node(element);

        if(head == null) {
            head = node;
        } else {
            node.next = head;
            head = node;
        }
    }

    const printLinkedList = () => {
        temp = head;
        let result = '';
        while (temp) {
            result = result + temp.data + ' ';
            temp = temp.next;
        }
        return result;
    }

    const insertAfterNode = (insertAfterNode, data) => {
        const newNode = new Node(data);

        if(insertAfterNode) {
            newNode.next = insertAfterNode.next;
            insertAfterNode.next = newNode;
        }
    }

    addNodeAtStart(5);
    addNodeAtStart(4);
    addNodeAtStart(3);
    addNodeAtStart(2);
    addNodeAtStart(1);
    addNodeAtEnd(6);
    addNodeAtStart(7);
    insertAfterNode(head.next.next, 0);
    console.log(printLinkedList());
