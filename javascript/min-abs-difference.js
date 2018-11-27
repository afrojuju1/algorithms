// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
function minimumAbsoluteDifference(arr) {
  arr.sort(function (a, b) {
    return a - b;
  })

  let minDiff = arr[arr.length - 1] + 2;
  let i = 1;
  while (i < arr.length - 1) {
    let leftV = i === 0 ? 0 : arr[i - 1];
    let rightV = (i + 1 === arr.length) ? 0 : arr[i + 1];
    let currentV = arr[i];
    let leftDiff = Math.abs(leftV - currentV);
    let rightDiff = Math.abs(rightV - currentV);
    const min = Math.min(leftDiff, rightDiff);
    minDiff = min < minDiff ? min : minDiff;
    // console.log(`i: ${i}, left: ${leftV}, right: ${rightV}, leftDiff: ${leftDiff}, rightDiff: ${rightDiff}, minDiff: ${minDiff}`);
    i++;
  }

  return minDiff;
}

// expected: 3
// let arr = [1, -3, 71, 68, 17];

// expected: 2
// let arr = [-2, 2, 4];

// expected: 1
let arr = [-59, -36, -13, 1, -53, -92, -2, -54, 75];

// expected: 3
// arr = [3, -7, 0];
let result = minimumAbsoluteDifference(arr);
console.log(`result: ${result}`);