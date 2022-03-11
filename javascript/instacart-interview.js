"use strict";

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

               15
              / \
         14  13  21
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

pairs = [
    (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
    (15, 21), (4, 8), (4, 9), (9, 11), (14, 4), (13, 12),
    (12, 9), (15, 13)
]

Write a function that takes this data and the identifiers of two individuals as inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(pairs, 3, 8)   => false
hasCommonAncestor(pairs, 5, 8)   => true
hasCommonAncestor(pairs, 6, 8)   => true
hasCommonAncestor(pairs, 6, 9)   => true
hasCommonAncestor(pairs, 1, 3)   => false
hasCommonAncestor(pairs, 3, 1)   => false
hasCommonAncestor(pairs, 7, 11)  => true
hasCommonAncestor(pairs, 6, 5)   => true
hasCommonAncestor(pairs, 5, 6)   => true
hasCommonAncestor(pairs, 3, 6)   => true
hasCommonAncestor(pairs, 21, 11) => true

n: number of pairs in the input
*/


const pairs = [
  [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [15, 21],
  [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9],
  [15, 13]
];

const hasCommonAncestor = (pairs, x, y) => {
  const childToParent = {}

  for (const pair of pairs) {
    const [parent, child] = pair
    if (!childToParent[child]) {
      childToParent[child] = []
    }
    childToParent[child].push(parent)
  }

  const xParents = childToParent[x]
  const yParents = childToParent[y]

  console.log('map ', childToParent)
  console.log('xParents ', xParents)
  console.log('yParents ', yParents)

  const ancestors = {}
  let i = 0
  let j = 0
  while(i < xParents.length && j < yParents.length) {
    const iParent = xParents[i]
    const jParent = yParents[i]

    if (ancestors[iParent] || ancestors[jParent]) {
      return true
    }

    let parentsParent = childToParent[iParent]
    for (const parent of parentsParent) {
      ancestors[parent] = true
    }

    parentsParent = childToParent[jParent]
    for (const parent of parentsParent) {
      ancestors[parent] = true
    }

    ancestors[iParent] = true
    ancestors[jParent] = true

    i++
    j++
  }

  console.log(ancestors)

  return false
}

const result2 = hasCommonAncestor(pairs, 6, 8)
console.log(`hasCommonAncestor: ${result2}`)





const findNodesWithZeroAndOneParents = (pairs) => {
  // build map of child to parent
  const childToParent = {}

  for (const pair of pairs) {
    const [parent, child] = pair
    if (!childToParent[child]) {
      childToParent[child] = []
    }
    childToParent[child].push(parent)
  }

  for (const pair of pairs) {
    const [parent, child] = pair
    if (!childToParent[parent]) {
      childToParent[parent] = []
    }
  }

  const noParent = []
  const oneParent = []
  const keys = Object.keys(childToParent)
  for (const key of keys) {
    if (childToParent[key].length === 0) {
      noParent.push(key)
    } else if (childToParent[key].length === 1) {
      oneParent.push(key)
    }
  }

  return [noParent, oneParent]
}

/*
const pairs = [
  [5, 6], [1, 3], [2, 3], [3, 6], [15, 12],
  [5, 7], [4, 5], [4, 9], [9, 12], [30, 16]
];
*/

const result = findNodesWithZeroAndOneParents(pairs)
console.log(result)
