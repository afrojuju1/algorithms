// https://leetcode.com/problems/longest-increasing-subsequence/

const lengthOfLIS = (nums) => {
  // sort the array
  const sortedNums = nums
  let subsequence = []
  for (let i = 0; i < sortedNums.length; i++) {
    const lastIndex = subsequence.length - 1
    const lastNum = subsequence[lastIndex]
    const currentNum = sortedNums[i]
    // console.log(`lastNum ${lastNum}, currentNum ${currentNum}, subSeq `, subsequence)
    if (!lastNum) {
      subsequence = [currentNum]
    } else if (lastNum >= currentNum) {
      subsequence[lastIndex] = currentNum // replace
    } else {
      subsequence.push(currentNum)
    }
  }

  return subsequence
}

// const nums = [10,9,2,5,3,7,101,18]

const nums = [4,10,4,3,8,9]
console.log(lengthOfLIS(nums))
