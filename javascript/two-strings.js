/**
 * https://www.hackerrank.com/challenges/two-strings/problem
 * Problem:
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 * For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.
 * Complete the function twoStrings. It should return a string, either YES or NO based on whether the strings share a common substring.
 * twoStrings has the following parameter(s):
 *   s1, s2: two strings to analyze.
 */

function twoStrings(s1, s2) {
  let mapA = new Map();

  let arrayA = s1.split('');
  arrayA.forEach(function (i) {
    mapA.set(i, i);
  })

  let sharesASubString = false;
  let arrayB = s2.split('');
  for (let i of arrayB) {
    let value = mapA.get(i);
    if (value) {
      sharesASubString = true;
      break;
    }
  }

  return sharesASubString ? 'YES' : 'NO';
}

// test case 1:
// const s1 = 'hello';
// const s2 = 'world';

// test case 2:
const s1 = 'hi';
const s2 = 'world';

const result = twoStrings(s1, s2);
console.log(`result: ${result}`);