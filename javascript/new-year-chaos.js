// https://www.hackerrank.com/challenges/new-year-chaos/problem
function minimumBribes(q) {
  let qMap = new Map();
  let sqMap = new Map();
  let stack = [];
  let unsortedQ = JSON.parse(JSON.stringify(q)); // force a detach

  for (let i=0; i<q.length; i++) {
    let value = unsortedQ[i];
    qMap.set(value, i);
  }

  let sortedQ = q.sort(function (a, b) {
    return a - b;
  })

  for (let i=0; i<q.length; i++) {
    let value = sortedQ[i];
    sqMap.set(value, i);
  }

  // console.log('unsorted: ', unsortedQ);
  // console.log('sorted: ', sortedQ);
  // console.log('q map: ', qMap.entries());
  // console.log('sq map: ', sqMap.entries());

  let lastItem = sortedQ[sortedQ.length - 1];

  for (let i=0; i<unsortedQ.length; i++) {
    let key = unsortedQ[i];
    let qMapIndex = qMap.get(key);
    let sqMapIndex = sqMap.get(key);
    let subIndex = sqMapIndex - 2;
    let subI = sqMapIndex - qMapIndex;
    console.log(`key: ${key}, qMapIndex: ${qMapIndex}, sqMapIndex: ${sqMapIndex}, subIndex: ${subIndex}, subI: ${subI}`)

    // should be in the negative
    if (subI < -2 || subI > 2) {
      console.log('Too chaotic. i: ', i);
      // return 'Too chaotic';
      // console.log('Too chaotic');
      return;
    }

    // did not move. don't add to stack
    if (subI !== 0 && subIndex !== 0 && lastItem > key) {
      console.log(`about to push: ${key} to stack`);
      stack.push(key);
    }
  }

  console.log(stack.length);
  // return stack.length;
}

// expected: 'too chaotic';
// const q = [5, 1, 2, 3, 7, 8, 6, 4];

// expected: 7;
const q = [1, 2, 5, 3, 7, 8, 6, 4];
//        [1, 2, 5, 3, 7, 8, 6, 4] - #1
//        [1, 2, 3, 4, 5, 6, 7, 8] - final sorted

// expected: 4
// const q = [1, 2, 5, 3, 4, 7, 8, 6];

// const q = [2, 1, 5, 3, 4];
// expected = 3

// expected: 'too chaotic'
// const q = [2, 5, 1, 3, 4];

let result = minimumBribes(q);
// console.log(`result: ${result}`);