// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  // console.log(arr);
  let maxSum = -999999999;

  for (let i = 0; i < arr.length; i++) {
    if (i + 2 >= arr.length) {
      continue;
    }

    let rowA = arr[i];
    let rowB = arr[i + 1];
    let rowC = arr[i + 2];
    // console.log(`i: ${i}, rowA: `, rowA, ' rowB: ', rowB, ' rowC: ', rowC);
    let k = 0;
    while (k < rowA.length && (k + 3) <= rowA.length) {
      let sectionA = rowA.slice(k, k + 3);
      let sectionB = rowB[k + 1];
      let sectionC = rowC.slice(k, k + 3);
      let total = calculateTotal(sectionA) + calculateTotal(sectionC) + sectionB;
      console.log(`k: ${k}, sectionA: `, sectionA, ' sectionB: ', sectionB, ' sectionC: ', sectionC, ' total: ', total);
      if (total > maxSum) {
        maxSum = total;
      }

      k++;
    }
  }

  console.log('maxSum: ', maxSum);
  return maxSum;
}

function calculateTotal(items) {
  return items.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  })
}

// let arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ];
//
// let expected = 19;

let arr = [
  [-1, -1, 0 ,-9 ,-2 ,-2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]

hourglassSum(arr);