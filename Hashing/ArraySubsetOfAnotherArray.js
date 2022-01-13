/**
 * Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. 
 * Both the arrays can be sorted or unsorted. It may be assumed that elements in both array are distinct.
 * Example 1:

    Input:
        a1[] = {11, 1, 13, 21, 3, 7}
        a2[] = {11, 3, 7, 1}
    Output:
    Yes
    Explanation:
    a2[] is a subset of a1[]

    Example 2:

    Input:
        a1[] = {1, 2, 3, 4, 5, 6}
        a2[] = {1, 2, 4}
    Output:
    Yes
    Explanation:
    a2[] is a subset of a1[]

    Example 3:

    Input:
        a1[] = {10, 5, 2, 23, 19}
        a2[] = {19, 5, 3}
    Output:
    No
    Explanation:
    a2[] is not a subset of a1[]
 */




const SubsetCheck = (firstArr, secondArr) => {
    let hs = new Set();

    for (let index = 0; index < firstArr.length; index++) {
        hs.add(firstArr[index]);
    }

    let size = hs.size;

    for (let index = 0; index < secondArr.length; index++) {
        hs.add(secondArr[index]);
    }

    if(hs.size === size) return true;

    return false;
};

let firstArr = [11, 1, 13, 21, 3, 7];
let secondArr = [11, 3, 7, 1];

console.log('Result: ', SubsetCheck(firstArr, secondArr));
