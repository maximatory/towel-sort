module.exports = function towelSort (matrix = []) {
  let result = []
    for(let i = 0; i<matrix.length; i++){
      i % 2 ? result.push(matrix[i].sort((a, b) => b - a)) : result.push(matrix[i].sort((a, b) => a - b))
    }
    return result.flat();
}
