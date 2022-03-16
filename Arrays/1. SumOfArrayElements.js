/*
Given an integer array arr of size n, you need to sum the elements of array.

Example 1:

Input:
n = 3
arr[] = {3 2 1}
Output: 6

Example 2:

Input:
n = 4
arr[] = {1 2 3 4}
Output: 10
*/ 

// const sumOfArrayElements = (arr) => {
//     let sum = 0;
//     arr.forEach(v => {
//         sum += v;
//     });
//     return sum;
// }

// const arr = [1,2, 3, 4, 5];
// const result = sumOfArrayElements(arr);
// console.log('result: ', result);

const SumOfArrayElements = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(SumOfArrayElements(arr));