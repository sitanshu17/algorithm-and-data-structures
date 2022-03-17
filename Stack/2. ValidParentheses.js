/**
 * Given a string S, composed of different combinations of '(' , ')', '{', '}', '[', ']'. The task is to verify the validity of the arrangement.
Note: Ignore the precedence of brackets.

Example 1:

Input:
S = ()[]{}
Output: 1
Explanation: The arrangement is valid.

Example 2:

Input:
S = ())({}
Output: 0
Explanation: Arrangement is not valid.
*/

const CheckForValidParenthese = (expression) => {
    let stack = [];

    for(let i = 0; i < expression.length; i++) {
        let temp = expression[i];

        if(temp == '(' || temp == '[' || temp == '{') {
            stack.push(temp);
        }

        if(stack.length == 0) {
            return false;
        }

        let check;
        switch (temp) {
            case ')':
                check = stack.pop();
                if(check == '}' || check == ']') {
                    return false;
                }
                break;
            case ']':
                check = stack.pop();
                if(check == ')' || check == '}') {
                    return false;
                }
                break;
            case '}':
                check = stack.pop();
                if(check == ')' || check == ']') {
                    return false;
                }
                break;
        }
    }
    return (stack.length == 0);
};

let expression = '([{}])';
console.log('Valid Parenthese: ', CheckForValidParenthese(expression));