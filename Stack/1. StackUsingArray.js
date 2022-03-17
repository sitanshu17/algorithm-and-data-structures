class stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    };

    pop() {
        if(this.items.length == 0) {
            return 'underflow';
        } else {
            return this.items.pop();
        }
    }

    peek() {
        if(this.items.length == 0) {
            return 'underflow';
        } else {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    };

    printStack() {
      let str = '';
      for(let i = 0; i < this.items.length - 1; i++) {
          str += this.items[i] + ' ';
      }  
      return str;
    };
}


let newStack = new stack();
stack.push(5);