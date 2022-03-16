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


const reverseWord = (sentence) => {
    console.log(sentence);
    let wordArr = sentence.split('.');
    let result = '';
    wordArr.forEach(element => {
        result = result + element + ' ';
    });
    console.log(result);

    let left = 0;
    let right = wordArr.length - 1;
    while (left < right) {
        let temp = wordArr[left];
        wordArr[left] = wordArr[right];
        wordArr[right] = temp;
        left++; 
        right--;
    }

    let rewResult = '';
    let count = 0;
    wordArr.forEach(element => {
        count++;
        if(wordArr.length == count) {
            console.log('count: ', count);
            rewResult = rewResult + element;
        } else {
            rewResult = rewResult + element + '.';
        }
    });
    console.log(rewResult);
}

let sentence = 'i.like.this.program.very.much';
reverseWord(sentence);