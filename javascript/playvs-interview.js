// function that takes in a roman numeral and outputs the value as an integer

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000


// IV -> 4
// VI -> 6
// IX -> 9
// XLI -> 40
// XC -> 90
// 139 -> CXXXIX
// CDXCIX -> 499
// const str = 'IV' // 4

const romanToNumber = (str) => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  const arr = str.split('')
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    const nextChar = arr[i + 1]

    if (map[char] < map[nextChar]) {
      total -= map[char]
      total += map[nextChar]
      i++
    } else {
      total += map[char]
    }
  }


  return total

}

// case 1
// const expected = 499
// const str = 'CDXCIX'
// const result = romanToNumber(str)
// console.log(`str: ${str}, num ${result}, expected ${expected === result}`)

// // case 2
// const expected = 8
// const str = 'VIII'
// const result = romanToNumber(str)
// console.log(`str: ${str}, num ${result}, expected ${expected === result}`)


// case 3
const expected = 999
const str = 'CMXCIX'
const result = romanToNumber(str)
console.log(`str: ${str}, num ${result}, expected ${expected === result}`)