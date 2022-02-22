/**
 * Name: Smallest common region
 * Description:
 *  -
 * Link: https://leetcode.com/problems/smallest-common-region/
 * Note: solution uses a combination of hashmap and DFS
 *  - hashmap to keep track to child->parent link
 *  - DFS to find all parents of a given region
 *  - time complexity -> is constant since regions is a constant size!
 */

const findSmallestRegion = (regions, region1, region2) => {
  // build a map of children to parent by walking the array
  const childToParentMap = {}
  for (let i = 0; i < regions.length; i++) {
    const data = regions[i]
    for (let j = 1; j < data.length; j++) {
      const parent = data[0]
      const child = data[j]

      childToParentMap[child] = parent
    }
  }

  // helper to get all parents for a given region
  const getRegionParents = (region) => {
    let key = region
    let parent = region
    const results = [region] // initialize to region since a region can contain itself
    while (parent) {
      parent = childToParentMap[key]
      if (parent) {
        results.push(parent)
        key = parent
      }
    }

    return results
  }

  const parentsA = getRegionParents(region1)
  const parentsB = getRegionParents(region2)
  // console.log('parentsA ', parentsA, '\n')
  // console.log('parentsB ', parentsB, '\n')
  // console.log('\n ... \n ', childToParentMap)

  for (let i = 0; i < parentsA.length; i++) {
    for (let j = 0; j < parentsB.length; j++) {
      if (parentsA[i] === parentsB[j]) {
        return parentsA[i] // we found the smallest region!
      }
    }
  }

  return 'Earth'
}

const regions = [
  ["Earth","North America","South America"],
  ["North America","United States","Canada"],
  ["United States","New York","Boston"],
  ["Canada","Ontario","Quebec"],
  ["South America","Brazil"]
]
const region1 = 'Quebec'
const region2 = 'New York'
const expected = 'North America'
const result = findSmallestRegion(regions, region1, region2)
console.log(`result ${result} | isExpected: ${expected === result ? 'YES' : 'NO'}`)

// Example B
// const regions = [
//   ["Earth", "North America", "South America"],
//   ["North America", "United States", "Canada"],
//   ["United States", "New York", "Boston"],
//   ["Canada", "Ontario", "Quebec"],
//   ["South America", "Brazil"]
// ]
// const region1 = 'Canada'
// const region2 = 'South America'
// const expected = 'Earth'
// const result = findSmallestRegion(regions, region1, region2)
// console.log(`result ${ result } | isExpected: ${ expected === result ? 'YES' : 'NO' }`)

// Example C
// const regions = [
//   ["Earth", "North America", "South America"],
//   ["North America", "United States", "Canada"],
//   ["United States", "New York", "Boston"],
//   ["Canada", "Ontario", "Quebec"],
//   ["South America", "Brazil"]
// ]
// const region1 = 'Earth'
// const region2 = 'Earth'
// const expected = 'Earth'
// const result = findSmallestRegion(regions, region1, region2)
// console.log(`result ${ result } | isExpected: ${ expected === result ? 'YES' : 'NO' }`)

// Example D
// const regions = [
//   ["Earth", "North America", "South America"],
//   ["North America", "United States", "Canada"],
//   ["United States", "New York", "Boston"],
//   ["Canada", "Ontario", "Quebec"],
//   ["South America", "Brazil"]
// ]
// const region1 = 'Canada'
// const region2 = 'Quebec'
// const expected = 'Canada'
// const result = findSmallestRegion(regions, region1, region2)
// console.log(`result ${ result } | isExpected: ${ expected === result ? 'YES' : 'NO' }`)