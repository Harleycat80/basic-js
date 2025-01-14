const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] === true && !matrix[i][j + 1] === true) {
        matrix[i][j + 1] += 1;
      }
      if (matrix[i][j] === true && !matrix[i + 1][j] === true) {
        matrix[i + 1][j] += 1;
      }
     
    }
  }
  for (let k = matrix.length - 1; k > 0; k--) {
    for (let m = matrix[k].length - 1; m > 0; m--) {
      if (matrix[k][m] === true && typeof matrix[k][m - 1] == "number") {
        matrix[k][m - 1] += 1;
      }

      if (matrix[k][m] === true && typeof matrix[k - 1][m] == "number") {
        matrix[k - 1][m] += 1;
      }
    }
  }


  for(let i=1;i<matrix.length-1;i++){
    for (let j=1;j<matrix[i].length-1;j++){
      if(matrix[i][j]===true){
        if(matrix[i+1][j-1]!==true){
          matrix[i+1][j-1]+=1
        }
        if(matrix[i+1][j+1]!==true){
          matrix[i+1][j+1]+=1
        }
        if(matrix[i-1][j+1]!==true){
          matrix[i-1][j+1]+=1
        }
        if(matrix[i-1][j-1]!==true){
          matrix[i-1][j-1]+=1
        }
        
      }
    }
  }
  
  return matrix.map(item=>item.map(i=>Number(i)))
}

module.exports = {
  minesweeper
};
