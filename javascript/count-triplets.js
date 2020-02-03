
/*
version 1
function countTriplets(arr, r) {
  let triplets = [];
  // looking for triplets
  // while not at the end arr[i] * r === arr[i+1];
  let arrMap = new Map();
  let arrMapB = new Map();
  let arrValues = [];
  arr.forEach(function (n, i) {
    // const value = n * r;
    const item = {index: i, value: n};
    arrValues.push(item);
    let tt = arrMap.get(n);
    if (tt) {
      tt.push(i);
    } else { tt = [i] }

    arrMap.set(n, tt);

    arrMapB.set((n * r), i);
  });

  console.log('values array\n', arrValues);
  console.log('entries: ', arrMap.entries());
  console.log('entriesB: ', arrMapB.entries());

  let atEnd = false;
  while (!atEnd) {

  }
  let j = 0;
  while (!atEnd) {
    let limit = 3 + j;
    let stack = []
    if (limit >= arr.length) {
      atEnd = true;
    }

    for (let i=j; i<limit; i++) {
      let left = arr[i];
      let right = arrValues[i];
      // let right = arrValues[i+1];
      console.log(`i: ${i}, left: ${left}, right: ${right}, left*r: ${(left * r)}`);
      if ((left * r) === right) {
        stack.push(i);
      }
    }

    if (stack.length === 3) {
      triplets.push(stack);
    }

    console.log('stack: ', stack)
    console.log('\n');
    j++;
  }

  console.log('triplets\n', triplets)
} */

function countTriplets(arr, r) {
  // keep track of the indexes
  const itemMap = {}
  // build lookup map
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (itemMap[item]) {
      // push the new index
      itemMap[item].push(i)
    } else {
      itemMap[item] = [i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const valA = arr[i] // * r
    const valB = valA * r
    const valC = valB * r
    console.log(`i: ${i}, valA: ${valA}, valB: ${valB}, valC: ${valC}`)
    // verify numbers are divisible by r
    console.log(`div: ${valA % r}, ${valC % r}, ${valB % r}`)
  }

  console.log('itemMap: ', itemMap)
}

// let arr = [1, 4, 16, 64];
// let r = 4;

let arr = [1, 5, 5, 25, 125];
let r = 5;
// output = 4

// let arr = [1, 3, 9, 9, 27, 81];
// let r = 3;
// output = 6;

countTriplets(arr, r);
