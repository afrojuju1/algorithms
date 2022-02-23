/**
 * Name: Number of islands
 * Description:
 * Link: https://leetcode.com/problems/number-of-islands/
 * Note: used BFS to solve this. O(V+E)
 *  -
 */

const markGrid = (grid, row, col, gridLength, rowLength) => {
  if ((row < 0 || col < 0) ||
    (row >= gridLength || col >= rowLength) ||
    grid[row][col] !== '1'
  ) {
    return
  }

  grid[row][col] = '#'
  markGrid(grid, row + 1, col, gridLength, rowLength)
  markGrid(grid, row - 1, col, gridLength, rowLength)
  markGrid(grid, row, col + 1, gridLength, rowLength)
  markGrid(grid, row, col - 1, gridLength, rowLength)
}

const numIslands = function(grid) {
  let count = 0

  for (let row = 0; row < grid.length; row++) {
    const rowItem = grid[row]
    for (let col = 0; col < rowItem.length; col++) {
      if (grid[row][col] === '1') {
        markGrid(grid, row, col, grid.length, rowItem.length)
        count++
      }
    }
  }

  return count
}

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
const expected = 3
const result = numIslands(grid)
console.log(`result: ${result} | expected ${expected === result}`)