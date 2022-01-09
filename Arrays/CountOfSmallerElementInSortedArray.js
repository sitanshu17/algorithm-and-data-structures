/**
 * Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.

    Example 1:

    Input:
    N = 6
    A[] = {1, 2, 4, 5, 8, 10}
    X = 9
    Output:
    5
    

    Example 2:

    Input:
    N = 7
    A[] = {1, 2, 2, 2, 5, 7, 9}
    X = 2
    Output:
    4
 */


const CountOfSmallerElement = (arr, element) => {
    let count = 0;
    if (arr.length > 0) {
        let i = 0;
        while (arr[i] <= element && i < arr.length) {
            count++;
            i++;
        }
        return count;
    } else {
        return count;
    }
};

const CountOfSmallerElementUsingBinarySearch = (arr, element) => {
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = parseInt((left + right)/2, 10);

        if(arr[mid] <= element) {
            count = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return count;
}

const arr = [1, 2, 2, 2, 5, 7, 9];   
console.log('Count: ', CountOfSmallerElement(arr, 2));
console.log('Optimized Count: ', CountOfSmallerElementUsingBinarySearch(arr, 2));