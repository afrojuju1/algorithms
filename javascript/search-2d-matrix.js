/**
 * Name:
 * Description:
 *  -
 * link: https://leetcode.com/problems/search-a-2d-matrix/
 * Note:
 *  -
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const rowLength = matrix.length
  const colLength = matrix[0].length

  let top = 0
  let bottom = rowLength - 1
  while (top <= bottom) {
    const row = Math.ceil((top + bottom) / 2)
    if (target > matrix[row][colLength - 1]) {
      top = row + 1
    } else if (target < matrix[row][0]) {
      bottom = row - 1
    } else {
      break // exit loop
    }
  }

  if (!(top <= bottom)) {
    return false
  }

  let row = Math.ceil((top + bottom) / 2)
  let left = 0
  let right = colLength - 1
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2)
    if (target > matrix[row][mid]) {
      left = mid + 1
    } else if (target < matrix[row][mid]) {
      right = mid - 1
    } else {
      return true
    }
  }

  return false
}

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
const target = 3
const expected = true
const result = searchMatrix(matrix, target)
console.log(`result: ${result} | expected ${expected === result}`)

