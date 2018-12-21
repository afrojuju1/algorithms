// https://www.hackerrank.com/challenges/min-max-riddle/problem

function riddle(arr) {
  let maxes = [];
  for (let n = 1; n <= arr.length; n++) {
    maxes.push(getMaxOfMins(n, arr));
  }
  return maxes;
}

function getMaxOfMins(n, arr) {
  let start = 0;
  let end = n;
  let max = 0;
  while (end <= arr.length) {
    let item = arr.slice(start, end);
    item = sortASC(item);
    max = item[0] > max ? item[0] : max;
    start++;
    end++;
  }

  return max;
}

function sortASC(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  })
}

// let arr = [2, 6, 1, 12];
// let expected = [12, 2, 1, 1];

let arr = [1, 2, 3, 5, 1, 13, 3];
let expected = [13, 3, 2, 1, 1, 1, 1];
console.log(riddle(arr));