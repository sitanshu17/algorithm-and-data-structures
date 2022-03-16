/**
 * Given an array Arr of size N, print second largest element from an array.

    Example 1:

    Input: 
        N = 6
        Arr[] = {12, 35, 1, 10, 34, 1}
        Output: 34
        Explanation: The largest element of the 
        array is 35 and the second largest element
        is 34.
    Example 2:

    Input: 
        N = 3
        Arr[] = {10, 5, 10}
        Output: 5
        Explanation: The largest element of 
        the array is 10 and the second 
    largest element is 5.
 */

// const SecondLargest = (arr) => {
//     let first = Number.MIN_VALUE;
//     let second = Number.MIN_VALUE;

//     if(arr.length < 2) {
//         return 'Invalid Input';
//     }

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if(arr[i] > second && arr[i] != first) {
//             second = arr[i];
//         }
//     }

//     if(second == Number.MIN_VALUE) {
//         return -1;
//     } 
//     return second;
// }
// const arr = [10, 4, 3, 50, 23, 90, 50, 90, 24, 91];
// const result = SecondLargest(arr);
// console.log('result: ', result);


const SecondLargest = (arr) => {
    let first = Number.MIN_VALUE;
    let second = Number.MIN_VALUE;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }

    if(second == Number.MIN_VALUE) {
        return -1;
    }
    return second;
};

const arr = [10, 4, 3, 50, 23, 90, 50, 90, 24, 91];
console.log('result: ', SecondLargest(arr));