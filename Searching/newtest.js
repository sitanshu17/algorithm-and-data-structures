/**
 * Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.
 * 
    Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
    Output: 12, 3, 9 
    Explanation: There is a triplet (12, 3 and 9) present 
    in the array whose sum is 24. 

    Input: array = {1, 2, 3, 4, 5}, sum = 9 
    Output: 5, 3, 1 
    Explanation: There is a triplet (5, 3 and 1) present 
    in the array whose sum is 9.
 */





const FindTriplet = (arr, sum) => {
    arr.sort((x, y) => x - y);
    console.log(arr);

    for(let i = 0; i < arr.length - 2; i++) {
        let left = i+1;
        let right = arr.length - 1;
        let result = [];
        while (left < right) {
            if(arr[i] + arr[left] + arr[right] === sum) {
                result.push(arr[i]);
                result.push(arr[left]);
                result.push(arr[right]);
                console.log(result);
                return;
            } else if (arr[i] + arr[left] + arr[right] <  sum) {
                left++;
            } else {
                right--;
            }
        }
    }
    console.log(-1);
};  

let arr = [1, 2, 3, 4, 5]; // [1,3,4,6,9,12]
let sum = 91;   
FindTriplet(arr, sum); 