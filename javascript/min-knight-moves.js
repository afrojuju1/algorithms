/**
 * Name: Minimum knight moves
 * Description: Calculate the minimum moves a knight can make from (0,0) -> (x,y)
 * Link: https://leetcode.com/problems/minimum-knight-moves/
 * Note:
 *  -
 */

const getValidMoves = (x, y, maxX, maxY) => {
  const cord1 = [x + 1, y + 2]
  const cord2 = [x + 2, y + 1]
  const cord3 = [x - 2, y + 1]
  const cord4 = [x - 1, y + 2]

  const cord5 = [x + 1, y - 2]
  const cord6 = [x + 2, y - 1]
  const cord7 = [x - 2, y - 1]
  const cord8 = [x - 1, y - 2]

  const result = [
    cord1,
    cord2,
    cord3,
    cord4,
    cord5,
    cord6,
    cord7,
    cord8,
  ]

  const final = []
  for (const cord of result) {
    const [a, b] = cord
    // filter for max too
    if (a >= 0 && b >= 0 && a <= maxX && b <= maxY) {
      final.push(cord)
    }
  }
  return final
}

const minKnightMoves = (x, y) => {
  const queue = [
    [0, 0] // push start position
  ]
  const visitedCords = {}

  const resultDup = {}
  while (queue.length) {
    // missing for LOOP! fucking A
    const [row, col] = queue.shift()
    if (row === x && col === y) {
      // we found the coordinate we want
      // console.log(`we found the item! row: ${row}, col: ${col}`)
      break
    }

    // check if visited
    if (visitedCords[`${row}|${col}`]) {
      // console.log(`we have visited this node before!, skipping`)
      continue
    }

    visitedCords[`${row}|${col}`] = true
    // push moves
    const moves = getValidMoves(row, col, x, y)
    for (let i = 0; i < moves.length; i++) {
      const [rowB, colB] = moves[i]
      // console.log(`current [${row}, ${col}] | new [${rowB}, ${colB}]`)
      if (!visitedCords[`${rowB}|${colB}`]) {
        // console.log(`first time seeing [${rowB}, ${colB}]`)
        if (resultDup[`${rowB}|${colB}`]) {
          resultDup[`${rowB}|${colB}`].push(`${row}|${col}`)
        } else {
          resultDup[`${rowB}|${colB}`] = [`${row}|${col}`]
        }
        queue.push([rowB, colB])
      }
    }
  }

  const calcTotal = (key) => {
    let total = 0

    if (resultDup[key]) {
      for (const item of resultDup[key]) {
        if (resultDup[item]) {
          total += calcTotal(item)
        } else {
          total++
        }
      }
    }

    return total
  }

  console.log('\n resultDup: ', resultDup)
  return calcTotal(`${x}|${y}`)
  // console.log('\n count: ', count)
}

// example A
// const expected = 1
// const result = minKnightMoves(2, 1)
// console.log(`result: ${result}, isExpected ${expected === result}`)

// example B
// const expected = 4
// const result = minKnightMoves(5, 5)
// console.log(`result: ${result}, isExpected ${expected === result}`)

// example B
const expected = 3
const result = minKnightMoves(0, 1)
console.log(`result: ${result}, isExpected ${expected === result}`)