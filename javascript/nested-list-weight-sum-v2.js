/**
 * Name: Nested List Weight Sum
 * Description: calculate the total sum of a nested array
 * Link: https://leetcode.com/problems/nested-list-weight-sum/
 * Note: Solution uses the help of depth first search
 */
const depthSum = (nestedList) => {
  const isArray = (arrItem) => Array.isArray(arrItem) || typeof arrItem === 'object'

  const sumArr = (arr, depth = 1) => {
    // console.log(`depth: ${depth}, item: ${item}`, item)
    if (!arr) {
      return 0
    }

    let total = 0
    for (const arrItem of arr) {
      // console.log(`arr: ${arrItem}, total: ${total}`)
      if (isArray(arrItem)) {
        total += sumArr(arrItem, depth + 1)
      } else {
        total += (arrItem * depth)
      }
    }

    // console.log(`item: ${item}, total: ${total}`)
    return total
  }

  let count = 0
  const depth = 1
  for (let i = 0; i < nestedList.length; i++) {
    // console.log(`i ${i} | nestedList[i]: ${nestedList[i]}, isArray: ${Array.isArray(nestedList[i])}`)
    if (isArray(nestedList[i])) {
      count += sumArr(nestedList[i], depth + 1)
    } else {
      count += depth * nestedList[i]
    }

    // console.log(`after - depth: ${depth}, count: ${count} \n`)
  }

  return count
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
const expected = 0
const result = depthSum([0])
console.log(`result: ${result}, isExpected ${expected === result}`)

// example D
// const expected = 10
// const result = depthSum([[1,1],2,[1,1]])
// console.log(`result: ${result}, isExpected ${expected === result}`)
