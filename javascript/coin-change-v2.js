/*
Link: https://leetcode.com/problems/coin-change/
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
 */

// using Dynamic programing
// coins int[], amount: int
const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0
  }

  // initialize dp[0] to 0
  const dp = [0]

  for (let i = 1; i < amount + 1; i++) {
    if (dp[i] === undefined) {
      dp[i] = amount + 1 // set to max amount!
    }

    for (const c of coins) {
      // console.log(`i:${i} | i - c: ${i - c}`)
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c])
      }
    }
  }

  // console.log('dp: ', dp)
  // if dp[amount] is maxValue, return -1 since we did not find a result
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

// example A
// const expected = 3
// const result = coinChange([1, 2, 5], 11)
// console.log(`result: ${result} | expected ${expected === result}`)

// example B
// const expected = -1
// const result = coinChange([2], 3)
// console.log(`result: ${result} | expected ${expected === result}`)

// example C
// const expected = 1
// const result = coinChange([3], 3)
// console.log(`result: ${result} | expected ${expected === result}`)

// example D
// const expected = 0
// const result = coinChange([1], 0)
// console.log(`result: ${result} | expected ${expected === result}`)

// example D
const expected = 2
const result = coinChange([1], 2)
console.log(`result: ${result} | expected ${expected === result}`)
