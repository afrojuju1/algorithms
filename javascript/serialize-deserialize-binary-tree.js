/**
 * Name:
 * Description:
 *  -
 * link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Note:
 *  -
 */

class TreeNode {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Encodes a tree to a single string
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
  // convert to array, then toString
  const arr = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    arr.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }

  // cleanup nulls from end of result set
  let i = arr.length - 1
  while (i >= 0) {
    if (Number.isInteger(arr[i])) {
      break
    }

    arr.pop()
    i--
  }
  const str = arr.join(',')
  console.log(str)
  return str
}

/**
 * Decodes your encoded data to tree.
 *
 // * @param {string} data
 * @param {number[]} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  let j = 1
  let i = 0
  const rootNode = new TreeNode(data[0])
  const nodeMap = {
    [data[0]]: rootNode
  }

  while (i < data.length) {
    const k = j + 1
    const currentVal = data[i]
    // found a null value, skip it
    if (!Number.isInteger(currentVal)) {
      i++
      j = k + 1
      continue
    }

    const left = data[j] || null
    const right = data[k] || null

    if (!nodeMap[currentVal]) {
      nodeMap[currentVal] = new TreeNode(currentVal, null, null)
    }

    if (nodeMap[left]) {
      nodeMap[currentVal].left = nodeMap[left]
    } else {
      const node = new TreeNode(left, null, null)
      nodeMap[currentVal].left = node
      if (left) {
        nodeMap[left] = node
      }
    }

    if (nodeMap[right]) {
      nodeMap[currentVal].right = nodeMap[right]
    } else {
      const node = new TreeNode(right, null, null)
      nodeMap[currentVal].right = node
      if (right) {
        nodeMap[right] = node
      }
    }

    i++
    j = k + 1
  }

  // console.log(nodeMap)
  // console.log('root ', rootNode, '\n')

  // serialize(rootNode)
  return rootNode
}

// const arr = [1,2,3,null,null,4,5]
const arr = [1,2,3,4,null,5,6]
deserialize(arr)

