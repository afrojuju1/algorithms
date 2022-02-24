/**
 * Name: Nested List Weight Sum
 * Description: calculate the total sum of a nested array
 * Link: https://leetcode.com/problems/nested-list-weight-sum/
 * Note: Solution uses the help of recursion
 */

const calcSum = (dept, arr) => {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(`[calcSum-before] | i: ${i}, j: ${i + 1}, total: ${total}, arr[i]: ${arr[i]}`)
    if (Array.isArray(arr[i])) {
      // console.log(`ARRAY!! i: ${i}, arr[i]: `, arr[i])
      total += calcSum(dept + i, arr[i])
    } else {
      total += arr[i] * dept
    }
    // console.log(`[calcSum-after] | i: ${i}, j: ${i + 1}, total: ${total}, arr[i]: ${arr[i]}`)
  }

  // console.log(`[calcSum] | exit: dept: ${dept} total: ${total}, arr: `, arr)
  return total
}

const depthSum = (nestedList) => {
  return calcSum(1, nestedList)
}

// example A
// const expected = 10
// const result = depthSum([[1,1],2,[1,1]])
// console.log(`result: ${result}, isExpected ${expected === result}`)

// example B
// const expected = 27
// const result = depthSum([1,[4,[6]]])
// console.log(`result: ${result}, isExpected ${expected === result}`)

// example C
// const expected = 0
// const result = depthSum([0])
// console.log(`result: ${result}, isExpected ${expected === result}`)

// example D
const expected = 10
const result = depthSum([[1,1],2,[1,1]])
console.log(`result: ${result}, isExpected ${expected === result}`)
