/**
 * Consecutive sum
 * Given an array of integers, find the unique values which add up to target
 *  - a value is unique if one is different
 *  - a value can be used unlimited # of times to add to target
 *
 * link https://leetcode.com/problems/combination-sum/
 * Note:
 */

const findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  }

  if (!!string.length && string.length < 2 ){
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) !== i) {
      continue
    }

    let remainder = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainder)) {
      permutationsArray.push(char + permutation)
    }
  }

  return permutationsArray
}

const combinationSum = (candidates, target) => {
  const queue = []
  const totalsSeen = {}
  let numsToAdd = []

  const resultsMap = {}
  const dupResultsMap = {}

  for (let i = 0; i < candidates.length; i++) {
    queue.push(candidates[i])
    // console.log('pushing ', candidates[i], ' to queue ', queue)
    let j = i
    while (j < candidates.length) {
      // console.log(`value of j: ${j}, i: ${i}, numsToAdd: `, numsToAdd, ' queue: ', queue)
      const nextCandidate = candidates[j]
      queue.push(nextCandidate)
      // console.log(`nextCandidate to push: ${nextCandidate}`)

      while (queue.length) {
        // check if the current numsToAdd + value = target
        const value = queue.pop()
        numsToAdd.push(value)
        const newSum = numsToAdd.reduce((prevVal, val) => prevVal + val, 0) // + candidate

        const tempKey = numsToAdd.join('')
        // console.log(`tempKey: ${tempKey}`)
        if (totalsSeen[tempKey] === undefined) {
          totalsSeen[tempKey] = newSum
        } else {
          // console.log('we have seen this before, skipping...')
          numsToAdd.pop()
          continue
        }

        // console.log('numsToAdd BEFORE: ', numsToAdd)
        if (newSum < target) {
          // console.log(`new sum ${newSum} is less than target, pushing ${value}`)
          queue.push(value)
        } else if (newSum === target) {
          if (dupResultsMap[tempKey]) {
            // console.log(`found the result but we have seen this combination before: ${tempKey}`)
            continue
          }

          // console.log(`found the target! results BEFORE: `, resultsMap)
          resultsMap[tempKey] = newSum
          dupResultsMap[tempKey] = newSum
          numsToAdd.pop()
          // get all permutations and add to duplicate map as well
          const perms = findPermutations(tempKey)
          for (const key of perms) {
            if (!resultsMap[key]) {
              dupResultsMap[key] = newSum
            }
          }
          // console.log(`found the target! results AFTER: `, resultsMap)
        } else {
          numsToAdd.pop()
          // console.log(`newSum ${newSum} is larger than target, removing ${value} from new:numsToAdd, `)
        }

        // console.log('numsToAdd AFTER: ', numsToAdd)
        //
        // console.log(`finished processing candidates[j] ${candidates[j]}, j: ${j} ...`)
      }

      if (numsToAdd.length) {
        numsToAdd.shift()
        queue.push(...numsToAdd)
      }

      j++
    }

    if (queue.length) {
      queue.shift()
      numsToAdd = [...queue]
    }

    // console.log(`finished processing candidates[i] ${candidates[i]}, i: ${i} \n`)
  }

  // console.log('totalsSeen: ', totalsSeen)
  // console.log('resultsMap: ', resultsMap)

  return Object.keys(resultsMap)
    // convert key string to array
    .map(key => key.split('')
      // convert string to number
      .map(num => Number(num))
    )
}

// example A
// const expected = [[7], [2, 2, 3]]
// const result = combinationSum([2,3,6,7], 7)
// console.log(`is correct? ${expected.length === result.length ? 'YES' : 'NO'} | \nexpected `, expected, '\nresult', result)

// example B
// const expected = []
// const result = combinationSum([2], 1)
// console.log(`is correct? ${expected.length === result.length ? 'YES' : 'NO'} | \nexpected `, expected, '\nresult', result)

// example C
// const expected = [[2,2,2,2],[2,3,3],[3,5]]
// const result = combinationSum([2, 3, 5], 8)
// console.log(`is correct? ${expected.length === result.length ? 'YES' : 'NO'} | \nexpected `, expected, '\nresult', result)

// example D
// const expected = [[1,1,1,1],[1,1,2],[2,2]]
// const result = combinationSum([1, 2], 4)
// console.log(`is correct? ${expected.length === result.length ? 'YES' : 'NO'} | \nexpected `, expected, '\nresult', result)

// example E
const expected = [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,2],[1,1,1,1,1,1,3],[1,1,1,1,1,2,2],[1,1,1,1,2,3],[1,1,1,1,5],[1,1,1,2,2,2],[1,1,1,3,3],[1,1,1,6],[1,1,2,2,3],[1,1,2,5],[1,1,7],[1,2,2,2,2],[1,2,3,3],[1,2,6],[1,3,5],[2,2,2,3],[2,2,5],[2,7],[3,3,3],[3,6]]
const result = combinationSum([2,7,6,3,5,1], 9)
console.log(`is correct? ${expected.length === result.length ? 'YES' : 'NO'} | \nresult `, result)

