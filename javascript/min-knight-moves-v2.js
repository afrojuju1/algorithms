/**
 * Name: Minimum knight moves
 * Description: Calculate the minimum moves a knight can make from (0,0) -> (x,y)
 * Link: https://leetcode.com/problems/minimum-knight-moves/
 * Note:
 *  -
 */

const minKnightMoves = (x, y) => {
  const queue = []
  queue.push([0, 0])
  const visitedMap = {
    '0|0': true
  }
  // isVisited[600][600] = true;
  const dirs = [
    [1,2], [2,1], [-1,2], [2,-1],
    [1,-2], [-2,1], [-1,-2], [-2,-1]
  ]

  let count = 0
  while(queue.length){
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const point = queue.shift()
      if(point[0] === x && point[1] === y) {
        return count
      }

      for(const dir of dirs) {
        const m = point[0] + dir[0]
        const n = point[1] + dir[1]
        const key = `${m}|${n}`
        if(!visitedMap[key]) {
          queue.push([m, n])
          visitedMap[key] = true
        }
      }
    }
    count++
  }

  return count
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
// const expected = 3
// const result = minKnightMoves(0, 1)
// console.log(`result: ${result}, isExpected ${expected === result}`)