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
}

// let arr = [1, 4, 16, 64];
// let r = 4;

let arr = [1, 5, 5, 25, 125];
let r = 5;

countTriplets(arr, r);