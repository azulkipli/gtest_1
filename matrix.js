const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  );
  
  const rotateMatrixCounterClockwise = matrix => (
    flipMatrix(matrix).reverse()
  );

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

let a = rotateMatrixCounterClockwise(matrix)

console.log(a);
