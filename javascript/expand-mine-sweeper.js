// find where to expand in mine sweeper

/*
mindField: multidimensional array -> mind field -> [[]]
numRows: number -> rows in mine field -> 1
numCols: number -> cols in mine field -> 1
toClick: array -> location to click -> []
 */

const click = (mineField, numRows, numCols, toClick) => {
  // use shift to get first item in queue
  const toCheckQueue = []
  const [givenI, givenJ] = toClick
  if (mineField[givenI][givenJ] === 0) {
    // mark as revealed
    mineField[givenI][givenJ] = -2
    toCheckQueue.push([givenI, givenJ])
  } else {
    // it is a bomb
    return mineField
  }

  while (toCheckQueue.length > 0) {
    const [currentI, currentJ] = toCheckQueue.shift()
    for (let i = currentI - 1; i < currentI + 1; i++) {
      for (let j = currentJ - 1; j < currentJ + 1; j++) {
        // check row out of bounds
        const isRowInBounds = i >= 0 && i < numRows
        const isColInBounds = j >= 0 && j < numCols
        if (isRowInBounds && isColInBounds && mineField[i][j] === 0) {
          // mark as revealed and add to queue
          mineField[i][j] = -2
          toCheckQueue.push([i, j])
        }
      }
    }
  }

  return mineField
}

const mineField = [
  [-1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, -1]
]
const numRows = 4
const numCols = 4
const toClick = [1, 2]

  [
    [ -1, 1, -2, 0 ],
    [ 1, 1, -2, 0 ],
    [ 0, 0, 1, 1 ],
    [ 0, 0, 1, -1 ]
  ]

console.log(click(mineField, numRows, numCols, toClick))
