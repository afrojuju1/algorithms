const fs = require('fs')
const filename = process.argv[2]

// https://www.geeksforgeeks.org/maximum-difference-between-two-elements/

// function maxDiffAde (a) {
//   let diffStack = []
//   for (let i = 1; i < a.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (a[j] < a[i]) {
//         const diff = a[i] - a[j]
//         diffStack.push(diff)
//       }
//     }
//   }
//
//   diffStack = diffStack.sort()
//   const total = diffStack.length
//   return total === 0 ? -1 : diffStack[total - 1]
// }

// complexity O(n^2)
// function maxDifference (a) {
//   let maxDiff = a[1] - a[0]
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       const diff = a[j] - a[i]
//       if (diff > maxDiff) {
//         maxDiff = diff
//       }
//     }
//   }
//
//   return maxDiff
// }

// optimized
function maxDifference (arr) {
  let maxDiff = arr[1] - arr[0]

  // Minimum number visited so far
  let minElement = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minElement > maxDiff) {
      maxDiff = arr[i] - minElement
    }

    if (arr[i] < minElement) {
      minElement = arr[i]
    }
  }

  return maxDiff <= 0 ? -1 : maxDiff
}

function main () {
  let a = []
  fs.readFile(filename, 'utf8', function (error, data) {
    if (error) throw error
    a = data.split('\n')

    let res = maxDifference(a)
    console.log('response: ', res)
  })
}

main()
