/**
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 * Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There
 * are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to
 * spend, and he wants to maximize the number of toys he buys with this money.
 * Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example,
 * if prices = [1,2,3,4] and Mark has k=7 to spend, he can buy items [1,2,3] for 6, or [3, 4] for 7 units of currency.
 * He would choose the first group of 3 items.
 * Complete the function maximumToys. It should return an integer representing the maximum number of toys Mark can purchase.
 * Parameters:
 *   prices: an array of integers representing toy prices
 *   k: an integer, Mark's budget
 */
function maximumToys(prices, k) {
  let sortedPrices = prices.sort(function (a, b) {
    return a - b;
  });

  let canBuy = [];
  let total = 0;

  for (let p of sortedPrices) {
    let newTotal = total + p;
    if (newTotal > k) {
      break;
    }

    total = newTotal;
    canBuy.push(p);
  }

  return canBuy.length;
}

// test case #1. expected: 4
// const prices = [1, 12, 5, 111, 200, 1000, 10];
// const k = 50;
// maximumToys(prices, k);

// test case #2. expected: 3
const prices = [1, 2, 3, 4];
const k = 7;
maximumToys(prices, k);