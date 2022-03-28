"use strict";
/*
assertIsPalindrome("", false);
assertIsPalindrome("lotion", false);
assertIsPalindrome("racecar", true);
assertIsPalindrome("Racecar", true);

assertIsPalindrome("  ", false);
assertIsPalindrome("Racecar", true);
assertIsPalindrome("Step on no pets", true);
assertIsPalindrome("Step   on no pets", true);
assertIsPalindrome("No lemon no melons", false);


assertIsPalindrome("Eva - can I see bees in a cave?", true);
assertIsPalindrome("A man, a plan, a canal: Panama!", true);

assertGetLongestPalindromes("abcAb", ["a", "b", "c", "A"]);
assertGetLongestPalindromes("Aaaaa", ["Aaaaa"]);
assertGetLongestPalindromes("A racecar", ["racecar"]);
assertGetLongestPalindromes("No lemon no melons", ["No lemon no melon"]);
assertGetLongestPalindromes("A Racecar reviver", ["Racecar", "reviver"]);
*/

const getLongestPalindrome = () => {
  // left and right pointers
  // while left <= right
  // if charAt(left) !== charAt(right)
  // str1 = str.substring() // without leftChar
  // str2 = str.substring(0, right - 1) // without right char
  // set result to longest palindrome
}


const isPalindrome = (str) => {
  str = str.trim().toLowerCase()

  if (str.length === 0) {
    return false
  }

  let left = 0
  let right = str.length - 1
  const aCode = 97
  const zCode = 122

  const isInvalidChar = (index) => str.charAt(index) === ' ' || str.charCodeAt(index) < aCode ||
    str.charCodeAt(index) > zCode

  while (left <= right) {
    if (isInvalidChar(left)) {
      // keep incrementing left pointer until we hit a character
      while (left !== str.length && isInvalidChar(left)) {
        left++
      }
    }

    if (isInvalidChar(right)) {
      // keep incrementing left pointer until we hit a character
      while (right !== -1 && isInvalidChar(right)) {
        right--
      }
    }

    if (str.charAt(left) !== str.charAt(right)) {
      return false
    }

    left++
    right--
  }

  return true
}

const assertIsPalindrome = (str, expected) => {
  const result = isPalindrome(str)
  const isExpected = result === expected
  console.log(`str: ${str}, isPalindrome: ${result}, isExpectedResult ${isExpected}`)
}

assertIsPalindrome("", false);
assertIsPalindrome("lotion", false);
assertIsPalindrome("racecar", true);
assertIsPalindrome("Racecar", true);