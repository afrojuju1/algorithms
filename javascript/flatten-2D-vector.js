/**
 * Name: Flatten a 2D vector
 * Description:
 *  -
 * Link: https://leetcode.com/problems/flatten-2d-vector/
 * Note: The trick is to flatten the array to make it easier to traverse
 */

const flattenArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const temp = flattenArray(arr[i])
      result.push(...temp)
    } else {
      result.push(arr[i])
    }
  }
  return result
}

class Vector2D {
  flattenedArr = []
  pointer = 0

  constructor(vec) {
    this.flattenedArr = flattenArray(vec)
  }

  next() {
    const val = this.flattenedArr[this.pointer]
    this.pointer++
    return val
  }

  hasNext() {
    if (this.flattenedArr[this.pointer] === 0) {
      // edge case
      return true
    }

    return Boolean(this.flattenedArr[this.pointer])
  }
}

const tt = [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
console.log(flattenArray(tt))
