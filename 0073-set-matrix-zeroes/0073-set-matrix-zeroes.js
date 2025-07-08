/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // const m = matrix.length, n = matrix[0].length;

    // for(let i = 0; i < m;i++){
    //     for(let j = 0; j < n; j++){
    //         if(matrix[i][j] === 0){
    //             for(let k = 0; k < m; k++) if(matrix[k][j] !== 0) matrix[k][j] = NaN;
    //             for(let k = 0; k < n; k++) if(matrix[i][k] !== 0) matrix[i][k] = NaN;
    //         }
    //     }
    // }
    // for(let i = 0; i < m; i++){
    //     for(let j = 0; j < n; j++){
    //         if(Number.isNaN(matrix[i][j])) matrix[i][j] = 0;
    //     }
    // }
    // return matrix;

    // const m = matrix.length, n = matrix[0].length;
    // const rows = new Array(m).fill(false);
    // const cols = new Array(n).fill(false);

    // for (let i = 0; i < m; i++){
    //     for (let j = 0; j < n; j++){
    //     if (matrix[i][j] === 0) {
    //         rows[i] = true;
    //         cols[j] = true;
    //     }
    //     }
    // }

    // for (let i = 0; i < m; i++){
    //     for (let j = 0; j < n; j++){
    //         if (rows[i] || cols[j]) matrix[i][j] = 0;
    //     }    
    // }

    const m = matrix.length, n = matrix[0].length;
    let firstRowZero = false, firstColZero = false;

    for(let i = 0; i < m; i++) if(matrix[i][0] === 0) firstColZero = true;
    for(let j = 0; j < n; j++) if(matrix[0][j] === 0) firstRowZero = true;

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j]=== 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][0] === 0 || matrix[0][j]=== 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(firstColZero){
        for(i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
    if(firstRowZero){
        for(i = 0; i < n; i++){
            matrix[0][i] = 0;
        }
    }
    return matrix;
};