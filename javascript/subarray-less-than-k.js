// https://leetcode.com/problems/subarray-product-less-than-k/

const numSubarrayProductLessThanK = (nums, k) => {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < k) {
      result.push([num])
    }

    let j = i + 1
    let product = 1
    while (j < nums.length && product < k) {
      // find product
      const nextNum = nums[j]
      console.log(`num ${num}, nextNum ${nextNum}, product ${product}`)
      product = num * nums[j] * product
      if (product < k) {
        result.push([num, nextNum])
      }
      console.log(`product after ${product}`)
      j++
    }
  }

  return result
}

const nums = [10, 5, 2, 6]
const k = 100
console.log(numSubarrayProductLessThanK(nums, k))
