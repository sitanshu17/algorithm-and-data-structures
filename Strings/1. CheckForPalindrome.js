/**
 * Given a string S, check if it is palindrome or not.

Example 1:
    Input: S = "abba"
    Output: 1
    Explanation: S is a palindrome

Example 2:
    Input: S = "abc" 
    Output: 0
    Explanation: S is not a palindrome
 */



// const CheckForPalindrome = (testString) => {
//     let left = 0;
//     let right = testString.length - 1;

//     while (left < right) {
//         if(testString[left] != testString[right]) {
//             return 0;
//         }
//         left++;
//         right--;
//     }
//     return 1;
// }

// const testString = 'abbaa';
// console.log(CheckForPalindrome(testString));



const CheckForPalindrome = (testString) => {
    let left = 0;
    let right = testString.length - 1;

    while (left < right) {
        if(testString[left] != testString[right]) {
            return false;
        }
        left ++;
        right--;
    }
    return true;
};

const testString = 'abcbac';
console.log(CheckForPalindrome(testString));