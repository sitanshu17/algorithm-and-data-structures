/**
 * Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 
    Examples :

    Input: arr[] = [10, 4, 3, 50, 23, 90]
    Output: 23
 */


// const ThirdHighest = (arr) => {
//     let first = Number.MIN_VALUE; 
//     let second = Number.MIN_VALUE;
//     let third = Number.MIN_VALUE;

//     if(arr.length < 3) {
//         return 'Invalid Input';
//     }

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > first) {
//             third = second;
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] != first) {
//             third = second;
//             second = arr[i];
//         } else if (arr[i] > third && arr[i] != first && arr[i] != second) {
//             third = arr[i];
//         }
//     }
//     return third;
// }

// const arr = [10, 4, 3, 50, 23, 90, 50, 90, 24];
// const result = ThirdHighest(arr);
// console.log('result: ', result);


const ThirdHighest = (arr) => {
    let first = Number.MIN_VALUE;
    let second = Number.MIN_VALUE;
    let third = Number.MIN_VALUE;

    if(arr.length < 3) {
        return 'Invalid Input';
    }

    for(let i = 0; i < arr.length-1; i ++) {
        if(arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third && arr[i] != second && arr[i] != first) {
            third = arr[i];
        }
    }
    if(third == Number.MIN_VALUE) {
        return -1;
    }
    return third;
};

const arr = [10, 4, 3, 50, 23, 90, 50, 90, 24];
console.log('result: ', ThirdHighest(arr));
