/**
 * Sliding puzzle
 * Find the least number of moves it takes to solve a 2x3 puzzle
 * A puzzle is solved when: [ [1, 2, 3], [4, 5, 0] ]
 * link https://leetcode.com/problems/sliding-puzzle/
 * Note: this solution did not fully work but had the right idea
 */

const idealValueToLocMap = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  0: [1, 2],
}

const shouldSwap = (board, x, y, x1, y1) => {
  if (board[x] === undefined || board[x][y] === undefined
  || board[x1] === undefined || board[x1][y1] === undefined) {
    console.log(`@ade board[x] `, board[x], ' board[x][y] ', board[x][y])
    // console.log(`@ade board[x1] `, board[x1], ' board[x1][y1] ', board[x1][y1])
    console.log('shouldSwap = false; edge case')
    return false
  }

  const val = board[x1][y1]
  // const val = board[x][y]
  const [idealLocX, idealLocY] = idealValueToLocMap[val]
  console.log(`[${x}, ${y}], val: ${board[x][y]} | [${idealLocX}, ${idealLocY}], idealVal: ${val}`)
  if (val && idealLocX === x && idealLocY === y) {
    console.log('shouldSwap = true')
    return true
  }

  console.log('shouldSwap == false')
  return false
}

const swapValues = (board, count, leftIndex, rightIndex) => {
  const [x1, y1] = leftIndex
  const [x2, y2] = rightIndex
  // console.log(`board[x1][y1]: ${board[x1][y1]}, board[x2][y2]: ${board[x2][y2]}`)
  const temp = board[x1][y1]
  board[x1][y1] = board[x2][y2]
  board[x2][y2] = temp
  // console.log(`values got swapped!`)
  if (count === -1) {
    return 1
  } else {
    return count + 1
  }
}

const isPuzzleSolved = (board) => {
  // console.log('currentBoard ', board)
  const idealLocToValueMap = {
    '0|0': 1,
    '0|1': 2,
    '0|2': 3,
    '1|0': 4,
    '1|1': 5,
    '1|2': 0,
  }

  const locKeys = Object.keys(idealLocToValueMap)
  for (const locKey of locKeys) {
    console.log(`locKey `, locKey)
    const [x, y] = locKey.split('|')
    // const locKeyString = `${x}|${y}`
    const expectedValue = idealLocToValueMap[locKey]
    if (board[x][y] !== expectedValue) {
      console.log('puzzle is not solved! currentVal ', board[x][y], ', expectedValue: ', expectedValue)
      return false
    }
  }

  console.log('puzzle was SOLVED')
  return true
}

const solvePuzzle = (board) => {
  let count = -1
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 3; y++) {
      console.log(`inner loop | [${x}, ${y}]`)
      const value = board[x][y]
      if (value === 0) {
        console.log(`found zero at [${x}, ${y}]`)
        //1. check left side
        console.log(`left | should swap with [${x}, ${y - 1}]?`)
        const swapLeft = shouldSwap(board, x, y, x, y - 1,)
        if (swapLeft) {
          count = swapValues(board, count, [x, y - 1], [x, y])
          break
        }

        //2. check right side
        console.log(`right | should swap with [${x}, ${y + 1}]?`)
        const swapRight = shouldSwap(board, x, y, x, y + 1)
        if (swapRight) {
          count = swapValues(board, count, [x, y + 1], [x, y])
          break
        }

        //3. check top side
        console.log(`top | should swap with [${x - 1}, ${y}]?`)
        const swapTop = shouldSwap(board, x, y, x - 1, y)
        if (swapTop) {
          count = swapValues(board, count, [x - 1, y], [x, y])
          break
        }

        //4. check top side
        console.log(`bottom | should swap with [${x + 1}, ${y}]?`)
        const swapBottom = shouldSwap(board, x, y, x + 1, y)
        if (swapBottom) {
          count = swapValues(board, count, [x + 1, y], [x, y])
          break
        }
      }
    }
  }

  return count
}

const factorialize = (num) => {
  if (num < 0) {
    return -1
  }
  else if (num === 0) {
    return 1
  }

  return (num * factorialize(num - 1))
}

const slidingPuzzle = (board) => {
  let count = 0
  let isSolved = false

  let index = 1
  // 6! -> 720
  while (index <= 720 && !isSolved) {
    console.log(`@ade start iteration: ${index}, board `, board)
    const result = solvePuzzle(board)
    if (result !== -1) {
      count = result
    }

    isSolved = isPuzzleSolved(board)
    console.log(`@ade end iteration: ${index}, isSolved: ${isSolved} board `, board, '\n')
    index++
  }

  return count === 0 ? -1 : index - 1
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