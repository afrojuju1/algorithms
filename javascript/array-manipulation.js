// https://www.hackerrank.com/challenges/crush/problem

// this solution is too slow. It does not pass all test cases.
// function arrayManipulation(n, queries) {
//   let arr = new Array(n).fill(0);
//   let largest = 0;
//
//   for (let i = 0; i < queries.length; i++) {
//     let query = queries[i];
//     let [a, b, k] = query;
//     let j = a - 1;
//     while (j < b) {
//       arr[j] += k;
//       largest = arr[j] > largest ? arr[j] : largest;
//       j++;
//     }
//   }
//
//   return largest;
// }

// this solution is more optimized. O(n + m)
function arrayManipulation(n, queries) {
  let arr = new Array(n).fill(0);
  // console.log('arr: ', arr);
  let largest = 0;

  let m = queries.length;
  for (let i = 0; i < m; i++) {
    let [a, b, k] = queries[i];
    arr[a - 1] += k;

    if (b < n) {
      arr[b] -= k;
    }
  }

  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += arr[i];
    if (temp > largest) {
      largest = temp;
    }
  }

  return largest;
}

// let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ];
// let n = 5;
// let expected = 200;

let queries = [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ];
let n = 10;
let expected = 10;

let actual = arrayManipulation(n, queries);
console.log(`actual: ${actual}, isEqual: ${expected === actual}`);