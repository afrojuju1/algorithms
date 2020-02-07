// https://leetcode.com/problems/subsets/
/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

const getSubset = (nums, subset, index) => {
  if (index === nums.length) {
    return subset
  }

  console.log(`index ${index}, subset `, subset)
  subset[index] = null
  getSubset(nums, subset, index + 1)
  subset[index] = nums[index]
  getSubset(nums, subset, index + 1)
  console.log('subset after: ', subset)
}

// const findSubsets = (nums) => {
//   let subset = []
//   return getSubset(nums, subset, 0)
// }

const findSubsets = (nums) => {
  let subset = []
  for (let i = 1; i <= nums.length; i++) {
    // number of elements are 2^i
    const leftEl = [] // Yes operation
    const rightEl = [] // No operation
  }
}

const nums = [1, 2, 3]
console.log(findSubsets(nums))
