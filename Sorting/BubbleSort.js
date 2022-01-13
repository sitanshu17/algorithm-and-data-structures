/**
 * Input : arr = [12, 3, 4, 1, 6, 9];
 * Output: result: [1, 3, 4, 6, 9, 12];
 */

const BubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [12, 3, 4, 1, 6, 9];
const newArr = BubbleSort(arr);

console.log(newArr);
