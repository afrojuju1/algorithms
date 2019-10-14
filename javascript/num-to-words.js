
const numToWords = (num) => {
  const SINGLE_DIGIT = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const TWO_DIGITS = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }

  const TENS_MULTIPLE = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  const TENS_POWER = {
    0: '',
    1: '',
    2: 'hundred',
    3: 'thousand',
    4: 'thousand',
    5: 'thousand',
    6: 'million',
    7: 'million',
    8: 'million',
    9: 'billion',
  }

  if (num < 10) {
    return SINGLE_DIGIT[num]
  }

  if (num >= 10 && num < 20) {
    return TWO_DIGITS[num]
  }

  if (num >= 20 && num < 100) {
    const reminder = num % 10
    const tens = num - reminder
    console.log(`tens: ${tens}, remainder: ${reminder}`)
    return `${TENS_MULTIPLE[tens]} ${SINGLE_DIGIT[reminder]}`
  }

  const expMap = {
    2: 2,
    3: 3,
    4: 3,
    5: 3,
    6: 6,
    7: 6,
    8: 6,
    9: 9, // billions
  }

  const exponent = Math.floor(Math.log10(num))
  if (exponent > 9) {
    return `sorry, $${num} is not supported`
  }

  const base = Math.pow(10, expMap[exponent])
  const remainder = num % base
  const firstDigit = (num - remainder) / base
  console.log(`num: ${num}, base: ${base}, exponent: ${exponent}, firstDigit: ${firstDigit}, reminder: ${remainder}`)
  return `${SINGLE_DIGIT[firstDigit]} ${TENS_POWER[exponent]} ${numToWords(remainder)}`
}

const printWords = (num) => {
  return numToWords(num)
}

console.log(printWords(10021))
