/*
Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */

const majorityEl = (items) => {
  const count = Math.floor(items.length / 2)
  const itemsMap = {}
  items.forEach((i) => {
    if (itemsMap[i]) {
      itemsMap[i] += 1
    } else {
      itemsMap[i] = 1
    }
  })

  let foundKey = false
  let index = 0
  const keys = Object.keys(itemsMap)
  while (!foundKey && index !== keys.length) {
    const key = keys[index]
    const value = itemsMap[key]
    if (value >= count) {
      foundKey = true
      return key
    }
    index++
  }
}

// [2, 1, 2] -> expected: 2
// [2, 1, 2, 3, 4, 5, 5, 5, 5] -> expected: 5
console.log(majorityEl([2, 1, 2, 3, 4, 5, 5, 5, 5]))
