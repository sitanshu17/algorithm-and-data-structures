/*
Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

Example 1:

Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
 

Example 2:

Input:
N = 5
A[]  = {1, 345, 234, 21, 56789}
Output:
min = 1, max = 56789
*/

const MaximumAndMinimumInArray = (arr) => {
    let max = arr[0];
    let min = arr[1];

    if(max < min){
        let temp = max;
        max = min;
        min = temp;
    }

    for(let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        } 
    }
    console.log('Max: ', max);
    console.log('Min: ', min);
};

const arr = [1, 345, 234, 21, 56789];
MaximumAndMinimumInArray(arr);