/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 *
 * Complete the checkMagazine function in the editor below. It must print 'Yes' if the note can be formed using the
 * magazine, or 'No'. checkMagazine has the following parameters:
 *   magazine: an array of strings, each a word in the magazine
 *   note:     an array of strings, each a word in the ransom note
 */
function checkMagazine(magazine, note) {
  let magMap = new Map();
  let noteMap = new Map();

  magazine.forEach(function (m) {
    let value = magMap.get(m);
    if (value) {
      value++;
      magMap.set(m, value);
    } else {
      magMap.set(m, 1);
    }
  })

  note.forEach(function (n) {
    let value = noteMap.get(n);
    if (value) {
      value++;
      noteMap.set(n, value);
    } else {
      noteMap.set(n, 1);
    }
  })

  let magHasNote = true;
  for (let [key, noteValue] of noteMap.entries()) {
    let magValue = magMap.get(key);
    // console.log(`key: ${key}, magValue: ${magValue}, noteValue: ${noteValue}`);
    if (!magValue || (magValue < noteValue)) {
      magHasNote = false;
      break;
    }
  }

  console.log(magHasNote ? 'Yes' : 'No');
}

// test case 1:
// const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
// const note = ['two', 'times', 'two', 'is', 'four'];

// test case 2:
// const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
// const note = ['give', 'one', 'grand', 'today'];

// test case 3:
// const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
// const note = ['ive', 'got', 'some', 'coconuts'];

// test case 4:
const magazine = ['h', 'ghq', 'g', 'xxy', 'wdnr', 'anjst', 'xxy', 'wdnr', 'h', 'h', 'anjst', 'wdnr'];
const note = ['h', 'ghq', 'grand', 'today'];

checkMagazine(magazine, note);