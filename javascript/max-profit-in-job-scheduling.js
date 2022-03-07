/**
 * Name:
 * Description:
 *  -
 * Link: https://leetcode.com/problems/maximum-profit-in-job-scheduling/
 * Note:
 *  -
 */

const jobScheduling = (startTime, endTime, profit) => {
  // convert to object then sort
  const list = []
  for (let i = 0; i < endTime.length; i++) {
    list.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i]
    })
  }

  /*
  list.sort(function(a, b) {
    return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age
    // if the name is the same.
});
   */

  list.sort((a, b) => {
    return ((a.end < b.end) ? -1 : ((a.end === b.end) ? 0 : 1))
  })

  console.log(`list after: `, list)

  let maxProfit = 0
  let lastEndTime = 0
  for (let i = 0; i < profit.length; i++) {
    const lastStartTime = startTime[i - 1] || 0
    console.log(`i: ${i}, lastStartTime: ${lastStartTime} p[i]: ${profit[i]} [${startTime[i]}, ${endTime[i]}]`)
    if (endTime[i] >= lastStartTime) {
      // add the profit to total
      console.log('adding to profit...')
      maxProfit = Math.max(maxProfit + profit[i], maxProfit)
      // lastEndTime = endTime[i]
    }
  }

  return maxProfit
}

// example A
// const expected = 150
// const result = jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])
// console.log(`result: ${result} | expected ${expected === result}`)

// example B
const expected = 6
const result = jobScheduling([1,1,1], [2,3,4], [5,6,4])
console.log(`result: ${result} | expected ${expected === result}`)