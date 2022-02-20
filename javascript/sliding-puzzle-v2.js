/**
 * Sliding puzzle
 * Find the least number of moves it takes to solve a 2x3 puzzle
 * A puzzle is solved when: [ [1, 2, 3], [4, 5, 0] ]
 * link https://leetcode.com/problems/sliding-puzzle/
 * Note: This is solved with BFS
 *  - flatten the board to make it easier to work with
 *  - add helper functions to make code cleaner
 *  - add a list of valid moves to make code cleaner
 */

// convert board from 2D array to 1D array
const flattenBoard = (board) => {
  const values = []
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      const value = board[row][col]
      if (value !== undefined) {
        values.push(value)
      }
    }
  }

  return values
}

const slidingPuzzle = (mainBoard) => {
  const solvedKey = '123450'
  // map of valid moves at each index
  const movesMap = {
    0: [1, 3],
    1: [2, 0, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  }

  // add the first board to the queue
  const queue = [flattenBoard(mainBoard)]

  // map of visited boards
  const visitedBoards = new Set()

  let totalMovesMade = 0
  // const isSolved =

  // process queue
  while (queue.length) {
    let k = queue.length
    while (k--) {
      // check if the board has been solved
      const board = queue.shift()
      const boardKey = board.join('')
      const isSolved = boardKey === solvedKey
      console.log(`isSolved: ${isSolved}, totalMovesMade: ${totalMovesMade}, board: ${boardKey}`)
      if (isSolved) {
        // the puzzle has been solved!
        return totalMovesMade
      }

      // check if we have seen this board before
      if (visitedBoards.has(boardKey)) {
        continue
      }

      visitedBoards.add(boardKey)

      // find zero and make swaps
      const zeroIndex = board.findIndex((value) => value === 0)
      const moves = movesMap[zeroIndex]
      for (const i of moves) {
        // make the move, construct new board and add to queue for processing
        const newBoard = [...board]
        newBoard[zeroIndex] = board[i]
        newBoard[i] = 0

        const newBoardKey = newBoard.join()
        if (!visitedBoards.has(newBoardKey)) {
          visitedBoards.add(newBoardKey)
          queue.push(newBoard)
        }
      }
    }

    totalMovesMade++
  }

  return -1
}

// example A
// const board = [[4, 1, 2], [5, 0, 3]]
// const expected = 5
// const result = slidingPuzzle(board)
// console.log(`result: ${result}, expected result: ${expected}, isSame: ${result === expected}`)

// example B
// const board = [[1, 2, 3], [4, 0, 5]]
// const expected = 1
// const result = slidingPuzzle(board)
// console.log(`result: ${result}, expected result: ${expected}, isSame: ${result === expected}`)

// example C
// const board = [[1, 2, 3], [5, 4, 0]]
// const expected = -1
// const result = slidingPuzzle(board)
// console.log(`result: ${result}, expected result: ${expected}, isSame: ${result === expected}`)

// example D
const board = [[3,2,4],[1,5,0]]
const expected = 14
const result = slidingPuzzle(board)
console.log(`result: ${result}, expected result: ${expected}, isSame: ${result === expected}`)

// example E
// const board = [[1,2,3],[5,4,0]]
// const expected = -1
// const result = slidingPuzzle(board)
// console.log(`result: ${result}, expected result: ${expected}, isSame: ${result === expected}`)