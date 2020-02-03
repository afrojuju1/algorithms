// 3sum question from leetcode
// https://leetcode.com/problems/3sum/

const abPerms = (nums) => {
  const abMap = {}
  const a = nums[0]
  // let lastDigit = false
  // let i = 0
  // while (!lastDigit && i < nums.length) {}

  for (let i = 1; i < nums.length - 1; i++) {
    const b = nums[i]
    // console.log(`a ${a}, b ${b}`)
    abMap[`${a}/${b}`] = a + b
  }
  // console.log(`map: `, abMap)
  return abMap
}

const firstPass = (nums) => {
  const abMap = abPerms(nums)
  const finalMap = {}
  const numbers = []
  const toReturn = {}
  const keys = Object.keys(abMap)

  let j = 2
  keys.forEach(key => {
    const abValue = abMap[key]

    for (let i = j; i < nums.length; i++) {
      const c = nums[i]
      const abcString = `${key}/${c}`
      const abc = abValue + c
      if (abc === 0) {
        finalMap[abcString] = abc

        const ab = key.split('/')
        const acb = `${ab[0]}/${c}/${ab[1]}`
        const keyA = `${abcString}|${acb}`
        const keyB = `${acb}|${abcString}`
        // console.log(`k ${abcString} : abc: ${abcString}, acb: ${acb}`)
        // console.log(`keyA ${keyA}, keyB ${keyB}`)

        if (!toReturn[keyA] && !toReturn[keyB]) {
          toReturn[keyA] = abcString
        }
      }
    }
    j++
  })
  return toReturn
  // console.log(toReturn)
}

const threeSum = (nums) => {
  let lastVal = false
  let i = 0
  const finalValues = []
  const toReturn = {}
  while(!lastVal) {
    const toProcess = nums.slice(i, nums.length)
    // const result = firstPass(toProcess)
    // console.log(`tt: `, tt, ` ttt: `, ttt)
    lastVal = i === nums.length - 3
    // finalValues.push(...result)
    i++
  }

  const numbers =
  Object.values(toReturn).forEach(key => {
    const toPush = key.split('/').map(i => +i)
    numbers.push(toPush)
  })
  // return numbers
  return finalValues
}

// todo: remove unique values
const threeSumTwo = (nums) => {
  let found = false
  nums.sort((a, b) => a - b)
  // console.log(`sorted `, nums)
  const result = []
  for (let i = 0; i < nums.length - 1; i++) {
    let l = i + 1
    let r = nums.length - 1
    let a = nums[i]

    while (l < r) {
      const z = a + nums[l] + nums[r]
      if (z  === 0) {
        result.push([a, nums[l], nums[r]])
        found = true
        l++
        r--
      } else if (z < 0) {
        l++
      } else {
        r--
      }
    }
  }

  return result

  // console.log(result)
}

/*
static void findTriplets(int arr[], int n)
{
    boolean found = false;

    // sort array elements
    Arrays.sort(arr);

    for (int i=0; i<n-1; i++)
    {
        // initialize left and right
        int l = i + 1;
        int r = n - 1;
        int x = arr[i];
        while (l < r)
        {
            if (x + arr[l] + arr[r] == 0)
            {
                // print elements if it's sum is zero
                    System.out.print(x + " ");
                    System.out.print(arr[l]+ " ");
                    System.out.println(arr[r]+ " ");

                l++;
                r--;
                found = true;
            }

            // If sum of three elements is less
            // than zero then increment in left
            else if (x + arr[l] + arr[r] < 0)
                l++;

            // if sum is greater than zero than
            // decrement in right side
            else
                r--;
        }
    }

    if (found == false)
            System.out.println(" No Triplet Found");
}
 */

// [-1,0,1,2,-1,-4]
const nums = [-1, 0, 1, 2, -1, -4]
// expected = [[-1,-1,2],[-1,0,1]]

// const nums = [-1, 0, 1, -1, 0, 1]
// expected =

// const nums = [0,0,0,0]
// const expected = [[0,0,0]]

// const nums = [-1,0,1,0]
// expected = [ [ -1, 0, 1 ] ]

// const nums = [3,0,-2,-1,1,2]
// expected = [[-2,-1,3],[-2,0,2],[-1,0,1]]
console.log(threeSumTwo(nums))
