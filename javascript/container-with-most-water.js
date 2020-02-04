/*
  Link: https://leetcode.com/problems/container-with-most-water/
  Question: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
    n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
    Find two lines, which together with x-axis forms a container, such that the container contains the most water.
    Note: You may not slant the container and n is at least 2.
 */

// This solution fails for [1, 2, 1]
const maxArea = (nums) => {
  if (nums.length === 2) {
    // return the square of the smallest value
    const smallest = nums[0] <= nums[1] ? nums[0] : nums[1]
    // console.log(`smallest ${smallest}`)
    return smallest * smallest
  }

  let i = 0
  let j = nums.length - 1
  let largestMax = 0
  while (i < j) {
    console.log(`nums[i] ${nums[i]}, nums[j] ${nums[j]}`)
    if (nums[i] < nums[j]) {
      i++
    } else if (nums[i] === nums[j]) {
      i++
      j--
      largestMax = nums[i]
      // console.log('got in here')
    } else {
      // nums[i] > nums[j]
      return nums[j] * nums[j]
    }
  }

  console.log(`largestMax: ${largestMax}`)
  return largestMax * largestMax
}

const maxAreaCalcV2 = (nums) => {
  let i = 0
  let j = nums.length - 1
  let maxA = 0

  while (i < j) {
    const minHeight = Math.min(nums[i], nums[j])
    const area = minHeight * (j - i)
    maxA = Math.max(area, maxA)
    if (nums[i] <= nums[j]) {
      i++
    } else {
      j--
    }
  }

  return maxA
}

// const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const nums = [5, 3]
// const nums = [1, 2, 5, 4, 1]
// const nums = [1, 2, 1]
console.log(maxAreaCalcV2(nums))
