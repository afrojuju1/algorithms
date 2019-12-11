// https://www.hackerrank.com/challenges/mini-max-sum/problem

/*
items is an array of 5 positive integers
find min/max if we add up 4 of the 5 integers
 */
const minMaxSum = (items) => {
  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < items.length; i++) {
    let sum = 0
    for (let j = 0; j < items.length; j++) {
      if (i === j) {
        continue
      }

      sum += items[j];
    }
    maxSum = sum > maxSum ? sum : maxSum
    if (minSum === 0) {
      minSum = sum
    }
    minSum = sum < minSum ? sum : minSum
  }

  console.log(`${minSum} ${maxSum} `)
}

// 5 positive integers
// const items = [1, 2, 3, 4, 5]
const items = [256741038, 623958417, 467905213, 714532089, 938071625]
// expected = 2063136757 2744467344
minMaxSum(items)
