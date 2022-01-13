/**
 * Given a N x N matrix M. Write a program to find count of all the distinct elements common to all rows of the matrix. Print count of such elements.
 * Example 1:

    Input: 
    N = 4
    M = {{2, 1, 4, 3},
        {1, 2, 3, 2},
        {3, 6, 2, 3},
        {5, 2, 5, 3}}
    Output: 
    2
    Explaination: Only 2 and 3 are common in all rows.
    Example 2:

    Input: 
    N = 5
    M = {{12, 1, 14, 3, 16},
        {14, 2, 1, 3, 35},
        {14, 1, 14, 3, 11},
        {14, 5, 3, 2, 1},
        {1, 18, 3, 21, 14}}
    Output: 
    3
    Explaination: 14, 3 and 1 are common in all the rows.
 */




let matrix = [[12, 1, 14, 3, 16],
                [14, 2, 1, 3, 35],
                [14, 1, 14, 3, 11],
                [14, 5, 3, 2, 1],
                [1, 18, 3, 21, 14]];

PrintMatrix(matrix);