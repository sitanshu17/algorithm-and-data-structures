/*
Input: arr = [1,2,3,4,5]
Output: result = [5,4,3,2,1]
*/

// const ReverseAnArray = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }

// const arr = [1,2,3,4,5];
// let origionArray = '';

// arr.forEach(v => {
//     origionArray = origionArray + v + ' ';
// });
// console.log(origionArray);

// const result = ReverseAnArray(arr);
// let modifiedArray = '';

// arr.forEach( v => {
//     modifiedArray = modifiedArray + v + ' ';
// });
// console.log(modifiedArray);

const ReverseAnArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log('Origional Array: ', arr);
console.log('Modified Array: ',ReverseAnArray(arr));