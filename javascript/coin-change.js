// https://leetcode.com/problems/coin-change/
/*
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

const findChange = (coins, num, changeMap) => {
  let index = coins.length - 1
  const change = []

  while (index >= 0) {
    const remainder = num - coins[index]
    const prevChange = changeMap[remainder]
    // console.log(`num ${num}, i ${index}, coin ${coins[index]} r ${remainder}`)
    if (prevChange) {
      break
    }

    if (remainder === 0) {
      change.push(coins[index])
      break
    }

    if (remainder < 0) {
      index--
      continue
    } else {
      // add to list, keep calling
      change.push(coins[index])
      change.push(...findChange(coins, remainder, changeMap))
      changeMap[remainder] = change
    }

    const changeTotal = change.reduce((acc, currentVal) => acc + currentVal)
    if (changeTotal === num) {
      break
    }
    index--
  }

  console.log(`change at exit: `, change, ' \n')
  return change
}

// coins int[], amount: int
const fewestCoins = (coins, amount) => {
  const changeMap = new Map()
  const toReturn = findChange(coins, amount, changeMap)
  if (toReturn.length === 0) {
    return 0
  }
  // if the value does not add up, return
  const total = toReturn.reduce((acc, val) => acc + val)
  return total !== amount ? -1 : toReturn.length
}


// const sampleA = {
//   coins: [1, 2, 5],
//   amount: 11,
//   expected: [5, 5, 1]
// }

const sampleA = {
  coins: [2],
  amount: 1,
  expected: -1
}

console.log(fewestCoins(sampleA.coins, sampleA.amount))
