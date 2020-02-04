/*
  Link: https://leetcode.com/problems/longest-palindromic-substring/
  Question: Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
 */

const isPalindrome = (s) => {
  if (s.length === 1) {
    return true
  }

  let i = 0
  let j = s.length - 1
  while (i < j) {
    const iChar = s[i]
    const jChar = s[j]
    console.log(`iChar ${iChar}, jChar ${jChar}`)
    if (iChar !== jChar) {
      return false
    }
    i++ // increment i
    j-- // decrement j
  }

  return true
}

const longestPalindromeSubstring = (s) => {
  if (s.length <= 1) {
    return s
  }

  if (s.length === 2) {
    if (s.charAt(0) === s.charAt(1)) {
      return s
    }

    return s.charAt(0)
  }

  let i = 0
  let j = s.length - 1
  while (i < j) {
    // slice, starting index is inclusive, end is not
    // ignore subString where length === s.length because it is the whole string not a substring
    const subString = s.slice(i, j + 1)
    if (isPalindrome(subString) && subString.length !== s.length) {
      return subString
    }

    i++
    j--
  }

  return s
}

// using DP
const longestPalindromeSubstringV2 = (s) => {
  const n = s.length
  if (s.length <= 1) {
    return s
  }

  if (s.length === 2) {
    if (s.charAt(0) === s.charAt(1)) {
      return s
    }

    return s.charAt(0)
  }

  // arr = new Array(n+1).fill(null).map(() => new Array(m+1).fill(null));

  let table = new Array(3).fill(false)
    .map(() => new Array(3).fill(false))
  console.log(table)
  let start = 0
  let maxLength = 0
  for (let k = 3; k <= n; ++k) {
    // new Array(n).fill(0);
    // table.push(new Array(k).fill(0))
    for (let i = 0; i < n - k + 1; ++i) {
      const j = i + k - 1
      console.log(`i ${i}, j ${j}, s[i] ${s.charAt(i)} s[j] ${s.charAt(j)}`)
      if (table[i + 1][j - 1] && s.charAt(i) === s.charAt(j)) {
        table[i][j] = true
        if (k > maxLength) {
          start = i
          maxLength = k
        }
      }
    }
  }

  console.log(table)
  console.log(`start: ${start}, maxL: ${maxLength}`)

  return s.slice(start, maxLength)
}

// const s = 'babasb' // expected = 'aba' or 'bab'
const s = 'cbbd' // expected = 'bb'
// const s = 'bb' // expected = 'bb'
// const s = 'ac' // expected = 'a'
// const s = 'ccc' // expected = 'ccc'
console.log(longestPalindromeSubstringV2(s))
