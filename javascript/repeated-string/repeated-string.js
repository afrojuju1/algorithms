/**
 * https://www.hackerrank.com/challenges/repeated-string/problem
 * Complete the repeatedString function in the editor below. It should return an integer representing the number of
 * occurrences of 'a' in the prefix of length n in the infinitely repeating string.
 *
 * s: String to repeat
 * n: the number of characters to consider
 */

function repeatedString(s, n) {
  // edge case
  if (s.length === 1 && s === 'a') {
    return n;
  }

  let timesToProcess = parseInt(n / s.length); // number of times to repeat the string
  let finalStringLength = n - (timesToProcess * s.length); // handle odd number divisions
  let total = 0;
  // search for 'a' repeats in substring
  if (finalStringLength > 0) {
    const stringToSearch = s.substr(0, finalStringLength)
    total = findRepeat(stringToSearch)
  }

  // search for 'a' repeats in regular s
  const repeats = findRepeat(s)
  return total + (repeats * timesToProcess);
}

function findRepeat(stringToSearch) {
  let items = stringToSearch.split('');
  let filteredItems = items.filter(function (item) {
    return item === 'a';
  })

  return filteredItems.length
}

// set 1
// let s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
// let n = 736778906400;
// let expected = 51574523448;

// set 2
let s = 'a';
let n = 100000;
let expected = 100000;
let result = repeatedString(s, n);
console.log(`expected: ${expected}, result: ${result}, areEqual: ${expected === result}`);