/**
 * Name: Smallest common region
 * Description:
 *  -
 * Link: https://leetcode.com/problems/smallest-common-region/
 * Note:
 *  -
 */

const findSmallestRegion = (regions, region1, region2) => {
  // build a map of parent to children by walking the array
  const parentToChildMap = {}
  const childToParentMap = {}
  for (let i = 0; i < regions.length; i++) {
    const data = regions[i]
    for (let j = 1; j < data.length; j++) {
      const parent = data[0]
      const child = data[j]

      childToParentMap[child] = parent

      if (parentToChildMap[parent]) {
        if (child) {
          parentToChildMap[parent].push(child)
        }
      } else {
        parentToChildMap[parent] = child ? [child] : []
      }
    }
  }

  console.log(parentToChildMap)
  console.log('\n ... \n ', childToParentMap)
}

/*

Input:


 */

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
