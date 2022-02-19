/**
 * Input: height: array of integers, volume: number, k: number
 * Output: array: integers | represents final water distribution
 * Rules:
 *  If the droplet would eventually fall by moving left, then move left.
 *  Otherwise, if the droplet would eventually fall by moving right, then move right.
 *  Otherwise, rise to its current position.
 *  Here, "eventually fall" means that the droplet will eventually be at a lower level if it moves in that direction.
 *  Also, level means the height of the terrain plus any water in that column.
 * link: https://leetcode.com/problems/pour-water/
 */
const addWater = (heights, k) => {
  // check left side
  let index = k
  for (let pointer = k - 1; pointer >= 0; pointer--) {
    if (heights[pointer] > heights[index]) {
      break
    }

    if (heights[pointer] < heights[index]) {
      index = pointer
    }
  }

  if (heights[index] < heights[k]) {
    // we found the lowest
    return index
  }

  // check right side
  index = k
  for (let pointer = k + 1; pointer < heights.length; pointer++) {
    if (heights[pointer] > heights[index]) {
      break
    }

    if (heights[pointer] < heights[index]) {
      index = pointer
    }
  }

  if (heights[index] < heights[k]) {
    // we found the lowest
    return index
  }

  return k
}

const pourWater = (heights, volume, k) => {
  for(let v = 1; v <= volume; v++) {
    const index = addWater(heights, k)
    heights[index] += 1
  }

  return heights;
}

// example A
// const eResultA = [2, 2, 2, 3, 2, 2, 2]
// console.log(pourWater([2,1,1,2,1,2,2], 4, 3))

// example A
// const eResultB = [2,3,3,4]
// console.log(pourWater([1,2,3,4], 2, 2))

// example C
// const eResultC = [4,4,4]
// console.log(pourWater([3,1,3], 5, 1))

const isExpected = (result, expected) => {
  console.log('result: ', result, '\nexpected', expected)
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      console.log(`NOT EQUAL | i: ${i}, result[i]: ${result[i]}, expected[i]: ${expected[i]}`)
    }
  }
}

// example D
const eResultD = [1,2,3,4,3,3,2,2,3,4,3,2,1]
const result = pourWater([1,2,3,4,3,2,1,2,3,4,3,2,1], 2, 5)
isExpected(result, eResultD)

