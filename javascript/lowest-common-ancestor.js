/**
 * Name: Lowest common ancestor of a binary tree
 * Description:
 *  -
 * link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Note: can use DFS | BFS
 *  -
 */

const lowestCommonAncestor = (root, p, q) => {
  // map of parent to child nodes
  let j = 1
  const childToParent = {
    [root[0]]: -1
  }

  const getAllParents = (val) => {
    let parents = []
    if (!childToParent[val]) {
      parents.push(val)
    } else if (childToParent[val] === -1) {
      parents.push(val)
    } else {
      parents.push(...getAllParents(childToParent[val]))
      parents.push(val)
    }

    return parents
  }

  for (let i = 0; i < root.length; i++) {
    const leftChild = root[j]
    const rightChild = root[j + 1]
    const current = root[i]
    const parent = childToParent[current]

    // console.log(`parent: ${parent}, current: ${current}, leftChild: ${leftChild}, rightChild: ${rightChild}`)

    if (leftChild !== undefined && !childToParent[leftChild]) {
      childToParent[leftChild] = current
    }

    if (rightChild !== undefined && !childToParent[rightChild]) {
      childToParent[rightChild] = current
    }

    j = j + 2
  }

  // console.log(childToParent)

  const pParents = getAllParents(p)
  const qParents = getAllParents(q)
  // console.log(`p: ${p}, pParents: `, pParents)
  // console.log(`q: ${q}, qParents: `, qParents)

  const smallArr = pParents.length > qParents.length ? qParents : pParents
  const largeArr = pParents.length > qParents.length ? pParents : qParents

  // console.log(`smallArr: ${smallArr}, largeArr: ${largeArr} `)
  let result = 0
  let i = 0
  while (i < smallArr.length) {
    let k = 0
    while (k < largeArr.length) {
      if (smallArr[i] === largeArr[k]) {
        result = smallArr[i]
        i++
        k++
      } else if (smallArr[i] >= largeArr[k]) {
        i++
      } else {
        k++
      }
    }
  }

  // console.log('result ', result)
  return result
}

// // example A
// const expected = 3
// const result = lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1)
// console.log(`result: ${result}, expected: ${expected === result}`)

// example B
// const expected = 5
// const result = lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 4)
// console.log(`result: ${result}, expected: ${expected === result}`)

// example C
const expected = 1
const result = lowestCommonAncestor([1, 2], 1, 2)
console.log(`result: ${result}, expected: ${expected === result}`)