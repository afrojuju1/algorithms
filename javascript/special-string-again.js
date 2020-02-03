/*
A string is said to be a special string if either of two conditions is met:

- All of the characters are the same, e.g. aaa.
- All characters except the middle one are the same, e.g. aadaa.
 */

const specialString = (chars) => {
  // we already know the initial count
  const subStringMap = {}
  let count = chars.length
  for (let i = 2; i <= chars.length; i++) {
    for (let j = 1; j <= i; j++) {
      const item = chars.slice(0, i)
      const seenBefore = subStringMap[item]
      console.log(`seenBefore: ${seenBefore}`)
      if (seenBefore && seenBefore >= chars.length - 1) {
        continue
      }

      const isS = isSpecialString(item)
      console.log(`i: ${i}, j: ${j}, item: ${item}, isS: ${isS}`)
      if (isS) {
        count++
        if (subStringMap[item]) {
          subStringMap[item]++
        } else {
          subStringMap[item] = 1
        }
      }
    }
  }

  console.log(`total count: ${count}, map: `, subStringMap)
}

const isSpecialString = (s) => {
  console.log(`s is: ${s}`)
  // if (s.length === 1) {
  //   return true
  // }

  const isSameLetters = isSameChars(s)
  console.log(`isSame: ${isSameLetters}`)
  if (isSameLetters) {
    // return early
    return true
  }

  const middleIndex = Math.floor(s.length / 2)
  // group items to the left and right
  const leftLetters = s.slice(0, middleIndex)
  const rightLetters = s.slice(middleIndex + 1, s.length)

  // check if middle is different
  const isMiddleDifferent = !leftLetters.includes(s[middleIndex]) && !rightLetters.includes(s[middleIndex])
  // if (!isMiddleDifferent) {
  //   return false
  // }

  // check items to the left and right are the same
  const isLeftSameLetters = isSameChars(leftLetters)
  const isRightSameLetters = isSameChars(rightLetters)
  // console.log(`index: ${middleIndex}, middle: ${s[middleIndex]}, isMiddleDifferent: ${isMiddleDifferent}`)
  // console.log(`left: ${leftLetters}, isLeftSameLetters: ${isLeftSameLetters}`)
  // console.log(`right: ${rightLetters}, isRightSameLetters: ${isRightSameLetters}`)

  return isMiddleDifferent && isLeftSameLetters && isRightSameLetters
}

const isSameChars = (s) => {
  if (s.length === 1) {
    return true
  }
  // let isSame = true
  let i = 1;
  const firstChar = s[i]
  while(i < s.length) {
    if (s[i] !== firstChar) {
      return false
    }
    i++
  }

  return true
}

// const chars = 'asasd'
// const expected = 7

// const chars = 'abcbaba'
// const expected = 10

const chars = 'aaaa'
const expected = 10

specialString(chars)

