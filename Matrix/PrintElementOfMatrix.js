/**
 * Print Elements of matrix.
 */


 const PrintMatrix = (matrix) => {
    for(let row = 0; row < matrix.length; row++) {
        let result = '';
        for(let column = 0; column < matrix[row].length; column++) {
            result = result + matrix[row][column] + ' ';
        }
        console.log(result);
    }
}

let matrix = [[12, 1, 14, 3, 16],
                [14, 2, 1, 3, 35],
                [14, 1, 14, 3, 11],
                [14, 5, 3, 2, 1],
                [1, 18, 3, 21, 14]];

PrintMatrix(matrix);