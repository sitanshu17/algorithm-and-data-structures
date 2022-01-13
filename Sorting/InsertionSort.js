/**
 * Input : arr = [12, 3, 4, 1, 6, 9];
 * Output: result: [1, 3, 4, 6, 9, 12];
 */

const InsertionSort = (arr) => {
    let i, j, key;

    for(i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

let arr = [12, 3, 4, 1, 6, 9];
const newArr = InsertionSort(arr);
 
console.log(newArr);