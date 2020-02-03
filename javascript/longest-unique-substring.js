/*
  Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
  Question: Given a string, find the length of the longest substring without repeating characters.
Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
// solution is O(n) where n = s.length
const longestSubString = (s) => {
  let maxCount = 0
  let i = 0
  let j = 0
  const list = new Set()
  while (i < s.length && j < s.length) {
    const character = s.charAt(j)
    if (!list.has(character)) {
      list.add(character)
      j++
      maxCount = Math.max(maxCount, j - i)
    } else {
      list.delete(s.charAt(i))
      i++
    }
  }

  return maxCount
}

const s = 'abcabcbb'

console.log(longestSubString(s))
