/**
 * Name: Palindrome Pairs
 * Description:
 *  -
 * link: https://leetcode.com/problems/palindrome-pairs/
 * Note: Solved using a DP with a two pointer solution
 *  -
 */

const isPalindrome = (word) => {
  let left = 0
  let right = word.length - 1
  while (left < right) {
    if (word.charAt(left) !== word.charAt(right)) {
      return false
    }

    left++
    right--
  }

  return true
}

/**
 * returns the reverse of an input string
 * @param {string} word
 * @returns {string}
 */
const reverseWord = (word) => {
  return word.split('').reverse().join('')
}

/**
 * @param {string[]} words
 * @return {number[][]} result
 */
const palindromePairs = (words) => {
  const result = new Set()
  const reverseToIndexMap = {}

  // build map of reversed words to their index in words list
  for (let i = 0; i < words.length; i++) {
    const rWord = reverseWord(words[i])
    const rIndex = words.indexOf(rWord)
    if (rIndex >= 0) {
      reverseToIndexMap[rWord] = rIndex
    } else {
      reverseToIndexMap[words[i]] = i
    }
  }

  // loop over the list of words
  for (let i = 0; i < words.length; i++) {
    // reverse the word and check if rWord exists in map
    const rWord = reverseWord(words[i])
    // handle 0 index case
    if (reverseToIndexMap[rWord] >= 0 && reverseToIndexMap[rWord] !== i) {
      const rIndex = reverseToIndexMap[rWord]
      // result.add([i, rIndex])
      result.add(`${i}/${rIndex}`)
    }

    // todo: handle case where you take off one char at a time
    // j should probably start from i
    for (let j = i + 1; j < words.length; j++) {
      const newWordA = words[i] + words[j]
      // if newWord is a palindrome, add to result
      if (i !== j && isPalindrome(newWordA)) {
        result.add(`${i}/${j}`)
      }

      const newWordB = words[j] + words[i]
      if (i !== j && isPalindrome(newWordB)) {
        result.add(`${j}/${i}`)
      }
    }
  }

  const res = []
  result.forEach((result) => {
    res.push(result.split('/').map(val => Number(val)))
  })
  return res
}

// example A
// const words = ["abcd","dcba","lls","s","sssll"]
// const expected = [[0,1],[1,0],[3,2],[2,4]]
// const result = palindromePairs(words)
// console.log(`result `, result)

// example B
const words = ["bat","tab","cat"]
const expected = [[0,1],[1,0]]
const result = palindromePairs(words)
console.log(`result `, result)