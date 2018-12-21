// Method to multiply two arbitrarily large numbers together.
// - two numbers are passed as arguments
// - these numbers are represented as an array of ints stored in base10
// - the method should return the product of the numbers in the same format

// complexity O(n * m)
function bigIntMultiply(num1, num2) {
  let items = [];
  let length = 0;

  for (let i = num2.length - 1; i >= 0; i--) {
    let toPad = num2.length - (i + 1);
    let total = new Array(toPad).fill(0);
    let carry = 0;
    for (let j = num1.length - 1; j >= 0; j--) {
      let a = num2[i];
      let b = num1[j];
      let t = (a * b) + carry;

      let cv = getValueAndCarry(t);
      carry = cv[0];
      let v = cv[1];
      total.push(v);
    }

    if (carry > 0) {
      total.push(carry);
    }

    if (total.length > length) {
      length = total.length; // track longest
    }

    items.push(total);
  }

  let toReturn = new Array(length).fill(0);
  let carry = 0;
  for (let i = 0; i < length; i++) {
    let t = carry;
    items.forEach((item) => {
      t += item[i] || 0;
    })

    let cv = getValueAndCarry(t);
    carry = cv[0];
    let v = cv[1];
    // console.log(`carry: ${carry}, v: ${v}`);
    toReturn[i] = v;
  }

  return toReturn.reverse();
}

function getValueAndCarry (t) {
  let tString = String(t);
  let tArr = tString.split('');
  let carry = tArr.length > 1 ? +tArr[0] : 0;
  let value = +tArr[tArr.length - 1];
  return[carry, value];
}

// let num1 = [1, 2, 9];
// let num2 = [1, 9];
// let expected = [2, 4, 5, 1];

// let num1 = [1, 2, 3];
// let num2 = [1, 1];
// let expected = [1, 3, 5, 3];

// let num1 = [4, 1, 5, 4];
// let num2 = [5, 1, 4, 5, 4];
// let expected = [2, 1, 3, 7, 3, 9, 9, 1, 6];

let num1 = [6,5,4,1,5,4,1,5,4,1,5,1,4,5,4,5,4,5,4,1,5,4,1,5,4,5,4];
let num2 = [6,3,5,1,6,5,6,1,5,6,3,1,5,6,3,1,6,5,4,5,1,4,5,1,4,6,5,1,4,6,5,4];
let expected = [4,1,5,4,9,6,2,2,6,0,3,9,5,5,3,0,9,7,7,7,2,4,3,7,1,6,0,6,9,9,9,7,9,9,7,0,0,7,6,2,0,4,3,9,9,3,7,7,1,1,5,0,9,0,6,2,9,1,6];

const test = bigIntMultiply(num1, num2);
console.log(test);
