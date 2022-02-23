/**
 * Name:
 * Description:
 *  -
 * Link: https://leetcode.com/problems/fraction-to-recurring-decimal/
 * Note:
 *  -
 */

// need to account for negative values
//

  /*
const fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) {
    return '0'
  }

  const isNegative = numerator < 0 || denominator < 0
  // console.log(`isNegative: ${isNegative}`)
  const fNumerator = Math.abs(numerator)
  const fDenominator = Math.abs(denominator)

  let val = Math.floor(fNumerator / fDenominator)
  let remainder = fNumerator % fDenominator
  const remaindersMap = {}
  const results = []

  remaindersMap[remainder] = val
  results.push(val)

  // console.log(`val: ${val}, remainder: ${remainder}`)
  let repeatIndex = -1

  while (remainder) {
    if (remaindersMap[remainder]) {
      const lastVal = Math.floor(remainder * 10 / denominator)
      repeatIndex = results.length
      results.push(lastVal)
      break
    }

    const temp = remainder * 10
    val = Math.floor(temp / denominator)
    remainder = temp % denominator

    // console.log(`..newVal: ${temp} val: ${val}, newRemainder: ${remainder}`)
    remaindersMap[remainder] = val
    results.push(val)
  }

  console.log(`remaindersMap `, remaindersMap)
  console.log(`results `, results)
  console.log(`repeatIndex `, repeatIndex)

  const arrayToString = (array) => {
    const initial = `${isNegative ? '-' : ''}`
    return array.reduce(
      (prev, currentVal, currentIndex, arr) => {
        if (currentIndex === 0) {
          const hasMore = arr.length - 1 > 0
          return `${prev}${currentVal}${hasMore ? '.' : ''}`
        }

        const start = `${prev}${repeatIndex === currentIndex ? '(' : ''}${currentVal}`
        const end = `${repeatIndex !== -1 && currentIndex === arr.length - 1 ? ')' : ''}`
        return `${start}${end}`
      },
      initial
    )
  }

  return arrayToString(results)
}

*/

const fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) {
    return "0"
  }

  let res = ''
  // check if negative or positive
  res.concat(((numerator > 0) ^ (denominator > 0)) ? '-' : '')
  let num = Math.abs(numerator)
  let den = Math.abs(denominator)

  // integral part
  res.concat(Math.floor(num / den).toString())
  num %= den
  if (num === 0) {
    return res
  }

  // fractional part
  res.concat('.')
  const numeratorMap = {}
  numeratorMap[num] = res.length
  while (num !== 0) {
    num *= 10
    res.concat(Math.floor(num / den).toString())
    num %= den
    console.log('we working! ', num)
    if (numeratorMap[num]) {
      const index = numeratorMap[num]
      res = res.slice(0, index) + '(' + res.slice(index) + ')'
      // res.insert(index, "(");
      // res.concat(")");
      break
    } else {
      numeratorMap[num] = res.length
    }
  }
  return res
}

// example A
// const expected = '0.5'
// const result = fractionToDecimal(1, 2)
// console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)

// example B
const expected = '0.(012)'
const result = fractionToDecimal(4, 333)
console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)

// example C
// const expected = '-0.(069)'
// const result = fractionToDecimal(-5, 72)
// console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)

// example D
// const expected = '0'
// const result = fractionToDecimal(0, 72)
// console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)

// example D
// const expected = '2'
// const result = fractionToDecimal(2, 1)
// console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)

// example D
// const expected = '0.1(6)'
// const result = fractionToDecimal(1, 6)
// console.log(`result: ${result}, expected ${expected === result ? 'YES' : 'NO'}`)