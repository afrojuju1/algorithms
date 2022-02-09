// https://leetcode.com/problems/valid-sudoku/
/* rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

const isValid = (arr) => {
  const numMap = new Map()
  for (const value of arr) {
    if (value === '.') {
      continue
    }

    const seen = numMap.get(value)
    if (seen) {
      return false
    }

    numMap.set(value, true)
  }

  return true
}

const isValidColumn = (board, c) => {
  const col = []
  for (const row of board) {
    col.push(row[c])
  }

  return isValid(col)
}

const isValidRow = (board, r) => {
  const row = board[r]
  return isValid(row)
}

const isValidGrid = (board, r, c) => {
  const grid = []
  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      grid.push(board[i][j])
    }
  }
  // console.log('grid: ', grid)
  return isValid(grid)
}

const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    const isValidR = isValidRow(board, i)
    const isValidC = isValidColumn(board, i)
    if (!isValidR || !isValidC) {
      return false
    }

    if (i % 3 === 0) {
      console.log(`i ${i}`)
      const isGridValidA = isValidGrid(board, i, 0)
      const isGridValidB = isValidGrid(board, i, 3)
      const isGridValidC = isValidGrid(board, i, 6)
      if (!isGridValidA || !isGridValidB || !isGridValidC) {
        return false
      }
    }
  }

  return true
}

// const args = {
//   board: [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ],
//   expected: true
// }

const args = {
  board: [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ],
  expected: true
}

console.log(isValidSudoku(args.board))
