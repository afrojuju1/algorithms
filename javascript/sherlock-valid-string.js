// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
let counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

// Complete the isValid function below.
function isValid(str) {
  const YES = 'YES';
  const NO = 'NO';
  let x = 0;
  let y = 0;
  for (let i = 0; i < str.length; i++) {
    let num = str.charCodeAt(i) - 97;
    console.log('char: ', str[i], ' num: ', num);
    if (num > x) {
      x = num;
    }

    if (num !== x && x > 0) {
      y += num;
    }
  }



  console.log(`y: ${y}, x: ${x}`);
  return ((y - 1) - x === 0 || y - 1 === 0) ? YES : NO;
}

const sherlockValidString = (str) => {
  const chars = str.split('') // convert to array
  // const charMap = {}
  let cMap = new Map()
  chars.forEach((char) => {
    const oldCount = cMap.get(char)
    cMap.set(char, oldCount ? oldCount + 1 : 1)
  })

  cMap = new Map([ ...cMap.entries() ].sort((a, b) => b - a))
  console.log(cMap)

  // cMap.forEach((value, key) => {
  //
  // })

  // sort largest to smallest
  // const items = [ ...cMap.values() ].sort((a, b) => b - a)
  // const largest = items[0]
  // const smallest = items[items.length - 1]
  // const countMap = { [smallest]: 0, [largest]: 0 }
  // console.log(`largest: ${largest}, smallest: ${smallest}`)
  //
  // items.forEach((i) => {
  //   if (i === largest || i === smallest) {
  //     countMap[i]++
  //   }
  // })
  //
  // console.log(`countMap: `, countMap)
  //
  // // determine if all the counts are the same
  // if (largest === smallest || largest - 1 === smallest) {
  //   return 'YES'
  // }
  //
  // return 'NO'
}

// function isValidB (str) {
//   let countObject = counter(str);
//   let values = Object.values(countObject).sort(function (a, b) {
//     return a - b;
//   });
//
//   // 1. find max value
//   let maxValue = values[values.length - 1];
//   let minValue = values[0];
//   // 2. get total of max value
//   let totalMaxValues = values.filter(function (a) {
//     return a === maxValue;
//   })
//
//
//   // console.log(countObject);
//   // console.log('values: ', values);
//   // console.log('totalMax: ', totalMaxValues);
//   // console.log(`max: ${maxValue}, min: ${minValue}, totalMaxValues[0]: ${totalMaxValues[0]}`);
//   if (totalMaxValues.length > 1) {
//     return 'NO';
//   }
//
//   if (totalMaxValues[0] === minValue || totalMaxValues[0] - 1 === minValue) {
//     return 'YES';
//   }
//
//   return 'NO';
// }

// let str = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
// expected: YES

// let str = 'aabbc';
// expected: 'YES'

// let str = 'a';
// expected: 'YES'

// let str = 'abcdefghhgfedecba';
// expected: 'YES'

// let str = 'aaaabbcc';
// expected: 'NO'

let str = 'aabbcd';
// expected: NO

// let str = 'aabbccddeefghi';
// expected: NO

// let str = 'xxxaabbccrry';
//expected: NO
// console.log(isValid(str));

console.log(sherlockValidString(str))
