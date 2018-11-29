function maxMin(k, arr) {
  arr.sort(function (a, b) {
    return a - b;
  })

  // let n = arr.length
  // let unfairness = 9999999999;
  // console.log(`(n - k + 1): ${(n - k + 1)}`);
  // for (let i = 0; i < (n - k + 1); i++) {
  //   if (arr[i+k-1] - arr[i] < unfairness) {
  //     unfairness = arr[i+k-1] - arr[i];
  //   }
  // }
  //
  // return unfairness;

  let lower = 0;
  let upper = k;
  let limit = arr.length - k + 1;

  console.log(arr);

  let minFairness = 999999999999999999999;
  while (upper < limit) {
    let subArr = arr.slice(lower, upper);
    let small = subArr[0];
    let big = subArr[subArr.length - 1];
    let fairness = big - small;
    if (fairness < minFairness) {
      minFairness = fairness;
    }

    console.log(`lower: ${lower}, upper: ${upper}, small: ${small}, big: ${big}`);
    lower++;
    upper++;
  }

  return minFairness;
}

// expected: 816
// let arr = [6327, 571, 6599, 479, 7897, 9322, 4518, 571, 6677, 7432, 815, 6920, 4329, 4104, 7775, 5708, 7991, 5802, 8619, 6053, 7539, 7454, 9000, 3267, 6343, 7165, 4095, 439, 5621, 4095, 153, 1948, 1018, 6752, 8779, 5267, 2426, 9649, 2190, 9103, 7081, 3006, 2376, 7762, 3462, 151, 3471, 1453, 2305, 8442];
// let k = 8;

// expected: 20
// let arr = [10, 100, 300, 200, 1000, 20, 30];
// let k = 3;

// expected: 3
let arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
let k = 4;

// expected: 0
// let k = 2;
// let arr = [1, 2, 1, 2, 1];

// expected: 1335
// let arr = [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232];
// let k = 5;


console.log(maxMin(k, arr));