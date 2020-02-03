// https://leetcode.com/problems/permutations/

const perm = (nums, startIndex) => {
  if (startIndex === nums.length || !nums.length) {
    return
  }

  console.log('startIndex: ', startIndex)
  const items = []
  for (let i = 0; i < nums.length; i++) {
    const permItems = [nums[startIndex]]
    if (i === startIndex) {
      continue
    }

    const toProcess = nums.slice(i + 1, nums.length)

    permItems.push(...toProcess)
    items.push(permItems)
    // console.log(`i: ${i}, num: ${nums[i]} perms: `, perm)
  }
  console.log(`permItems: `, items)
  const tt = nums.slice(startIndex + 1, nums.length)
  console.log('tt: ', tt)
  console.log(`perm1: `, perm(tt, startIndex + 1))


}

const permutations = (nums) => {
  // track a
  for (let i = 0; i < nums.length; i++) {
    perm(nums, i)
    // const perms = []
    // const perm = [nums[i]]
    // for (let j = 0; j < nums.length; j++) {
    //   // skip where i === j
    //   if (i === j) {
    //     continue
    //   }
    //
    //   perm.push(nums[j])
    // }
    // console.log(`i: ${i}, num: ${nums[i]} perms: `, perm)
  }
}

const nums = [1, 2, 3]
permutations(nums)
