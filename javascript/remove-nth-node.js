// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given a linked list, remove the n-th node from the end of list and return its head.
/**
 *
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
ListNode = {
  val: number
  next: null | ListNode
}
 */

// solution is O(n)
// given n will always be valid!!
const removeNthFromEnd = (head, n) => {
  if (head.next === null) return null
  let index = 1;
  let curr = head;
  let cache = {};

  while (curr.next !== null) {
    cache[index] = curr
    index++
    curr = curr.next
  }

  cache[index] = curr
  console.log(cache)
  console.log(index)

  if (index === n) return head.next
  else cache[index-n].next = cache[index-n].next.next

  return head

  // initialize two pointers
  // let p1 = head
  // let p2 = head.next
  //
  // // for (let i = 0; i < n; i++) {
  // //   console.log(`i: ${i}`)
  // //   if (p2 === null) {
  // //     return null
  // //   }
  // //   p2 = p2.next
  // // }
  //
  // let i = 0
  // let foundNode = false
  // while (p2 !== null && !foundNode) {
  //   // keep moving the pointers
  //   if (i === n) {
  //     // found the node we want to remove
  //     // check if the next node is not null
  //     p1 = p2.next
  //     foundNode = true
  //     return p1
  //   }
  //
  //   p2 = p2.next
  //   p1 = p1.next
  //   i++
  // }
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

// [1,2,3,4,5]

// ListNode {
//   val: 1,
//     next:
//   ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } } }

console.log(JSON.stringify(removeNthFromEnd(head, 2)))
