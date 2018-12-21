/**
 * Write a program which accepts an array/list of Strings as input and returns the set of elements which occur the most frequently:
 * Example:
 * ["hello","world","cat","hello"] -> ["hello"]
 * ["hello","world","world","hello"] -> ["hello","world"]
 * ["hello","hello","hello","cat","cat"] -> ["hello"]
 * ["hello","world","cat"] -> ["hello","world","cat"]   (By definition, every element is the most frequent since nothing appears twice)
 * @param arr
 * @returns {Array}
 */
function mostRepeats(arr) {
  let items = new Map();

  for (let i = 0; i < arr.length; i++) {
    let count = items.get(arr[i]);
    // if count, increment count. Else let count = 1
    count = count ? count + 1 : 1;
    items.set(arr[i], count);
  }

  let largestCount = 0;
  let repeats = [];
  for (let [key, count] of items.entries()) {
    if (count > largestCount) {
      repeats = [];
      repeats.push(key);
      largestCount = count;
    } else if (count === largestCount) {
      repeats.push(key);
    }
  }

  return repeats;
}

let arr = ["hello","world","cat"];
console.log(mostRepeats(arr));
