/**
 * Given a sorted array, the task is to remove the duplicate elements from the array.
    Examples: 
 
    Input  : arr[] = {2, 2, 2, 2, 2}
    Output : arr[] = {2}
            new size = 1

    Input  : arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
    Output : arr[] = {1, 2, 3, 4, 5}
            new size = 5
 */



const RemoveDuplicates = (arr) => {
    let hs = new Set();
    arr.forEach(element => {
       hs.add(element); 
    });
    return Array.from(hs);
}
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(RemoveDuplicates(arr));