/**
 * Name: Valid Triangle Number
 * Description: Find the # of valid triangles we can form from an array of numbers
 * Link: https://leetcode.com/problems/valid-triangle-number/
 * Note: This can be solved using a two pointer solution
 *  - Sort the array first to reduce # of combinations to check
 */

/*
const triangleNumber = (nums) => {
  if (nums.length < 3) {
    return 0
  }

  // sort the array
  nums.sort()
  let result = 0
  for (let k = 2; k < nums.length; k++) {
    let i = 0
    let j = k-1

    while (i < j) {
      console.log(`k: ${k} j: ${j}, i: ${i}`)
      if (nums[i] + nums[j] > nums[k]) {
        result += j - i
        j--
      } else {
        i++
      }
    }
  }

  return result
}
*/


/*
public class Solution {
    public int triangleNumber(int[] nums) {
        int count = 0;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++) {
            int k = i + 2;
            for (int j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
                while (k < nums.length && nums[i] + nums[j] > nums[k])
                    k++;
                count += k - j - 1;
            }
        }
        return count;
    }
}
 */


// v2
const triangleNumber = (nums) => {
  let count = 0
  nums.sort()

  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++
      }
      count += k - j - 1
    }
  }

  return count
}


// example A
// const expected = 3
// const result = triangleNumber([2, 2, 3, 4])
// console.log(`result: ${result} | isExpected: ${expected === result}`)

// example B
// const expected = 4
// const result = triangleNumber([4, 2, 3, 4])
// console.log(`result: ${result} | isExpected: ${expected === result}`)

// example B
// const expected = 10
// const result = triangleNumber([24, 3, 82, 22, 35, 84, 19])
// console.log(`result: ${result} | isExpected: ${expected === result}`)
