/**
 * Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

    Example 1:

    Input:
        S = i.like.this.program.very.much
    Output: much.very.program.this.like.i
    Explanation: After reversing the whole
        string(not individual words), the input
        string becomes
        much.very.program.this.like.i
    
    Example 2:

    Input:
        S = pqr.mno
    Output: mno.pqr
    Explanation: After reversing the whole
        string , the input string becomes
        mno.pqr
 */


// const reverseWord = (sentence) => {
//     let wordArr = sentence.split('.');
//     let left = 0;
//     let right = wordArr.length - 1;

//     while (left < right) {
//         let temp = wordArr[left];
//         wordArr[left] = wordArr[right];
//         wordArr[right] = temp;
//         left++;
//         right--;
//     }

//     let rewResult = '';
//     let count = 0;
//     wordArr.forEach(element => {
//         count++;
//         if (wordArr.length == count) {
//             rewResult = rewResult + element;
//         } else {
//             rewResult = rewResult + element + '.';
//         }
//     });
//     return rewResult;
// }

// let sentence = 'i.like.this.program.very.much';
// console.log(reverseWord(sentence));


const reverseSentence= (sentence) => {
    let wordArr = sentence.split('.');
    let left = 0; 
    let right = wordArr.length - 1; 
    while(left < right) {
        const temp = wordArr[left];
        wordArr[left] = wordArr[right];
        wordArr[right] = temp;
        left++;
        right--;
    }

    let finalResult = '';
    let count = 0;
    wordArr.forEach(element => {
        count++;
        if(wordArr.length == count) {
            finalResult = finalResult + element;
        } else {
            finalResult = finalResult + element + '.';
        }
    });
    return finalResult;
};

const sentence = 'This.is.sample.sentence'
console.log(reverseSentence(sentence));