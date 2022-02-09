// return true if the s1 and s2 are one edit away from each other

/*
Solution is O(n)

Edge Cases
1. One of the strings is two or more characters longer than the other.
   return false since it is not one edit away.
2. The two strings have the same length.
   - loop over the characters in both strings
   - count the number of diffs
   - return false if diff count > 1. else return true
   - if the two strings are exactly the same, return true
3. One of the strings is one character longer than the other.
   - check if they're one diff away
      -> when you encounter different characters
      -> keep index at the shorter string
      -> increment index at longer string
   - check if adding a character to the shorter string will equal the longer string
 */

const isOneEditAway = (s1, s2) => {}
