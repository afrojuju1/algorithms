// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
let counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

// Complete the isValid function below.
function isValid(str) {
  let countObject = counter(str);
  let values = Object.values(countObject).sort(function (a, b) {
    return a - b;
  });

  // 1. find max value
  let maxValue = values[values.length - 1];
  let minValue = values[0];
  // 2. get total of max value
  let totalMaxValues = values.filter(function (a) {
    return a === maxValue;
  })


  console.log(countObject);
  console.log('values: ', values);
  console.log('totalMax: ', totalMaxValues);
  console.log(`max: ${maxValue}, min: ${minValue}, totalMaxValues[0]: ${totalMaxValues[0]}`);
  if (totalMaxValues.length > 1) {
    return 'NO';
  }

  if (totalMaxValues[0] === minValue || totalMaxValues[0] - 1 === minValue) {
    return 'YES';
  }

  return 'NO';
}

let str = 'aabbc';
// expected: 'YES'

// let str = 'a';
// expected: 'YES'

// let str = 'abcdefghhgfedecba';
// expected: 'YES'

// let str = 'aaaabbcc';
// expected: 'NO'

// let str = 'aabbcd';
// expected: NO

// let str = 'aabbccddeefghi';
// expected: NO
console.log(isValid(str));