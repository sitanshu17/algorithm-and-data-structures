/**
 * Given an unsorted array, count all distinct elements in it.

    Examples: 

    Input :   arr[] = {10, 20, 20, 10, 30, 10}
    Output : 3
    There are three distinct elements 10, 20 and 30.

    Input :   arr[] = {10, 20, 20, 10, 20}
    Output : 2
 */


const CountOfUniqueElements = (arr) => {
    let hs = new Set();

    arr.forEach(v => {
        hs.add(v);
    });
    return hs.size;
}
const arr = [10, 20, 20, 10, 30, 10];
console.log('Result : ', CountOfUniqueElements(arr));