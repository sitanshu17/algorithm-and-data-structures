/*
You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

Example 1:

Input:
N = 4
A[] = {1, 2, 3, 4}
â€‹Output:
1 3
Example 2:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
â€‹Output:
1 3 5
*/

// const printAlternateElement = (arr) => {
//     let result = '';
//     for(let i = 0; i < arr.length; ) {
//         result = result + arr[i] + ' ';
//         i += 2;
//     }
//     return result;
// }

// const arr = [1, 2, 3, 4, 5];
// const result = printAlternateElement(arr);
// console.log(result);

const printAlternateElement = (arr) => {
    let tempArr = [];
    for (let i = 0; i < arr.length;) {
        tempArr.push(arr[i]);
        i += 2;
    }

    return tempArr;
};

const arr = [1, 2, 3, 4, 5];
console.log(printAlternateElement(arr));