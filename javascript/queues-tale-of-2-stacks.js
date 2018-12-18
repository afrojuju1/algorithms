// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem

class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  getFrontItem() {
    return this.items[0];
  }

  printQueue() {
    return this.items.join(' ')
  }
}

// 1: Enqueue element x into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

function processData(input) {
  let instructions = input.split("\n");
  let q = instructions.shift(); // remove q since we do not care about it
  let queue = new Queue();
  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];

    if (instruction.length === 1) {
      if (parseInt(instruction) === 2) {
        // remove first item from queue
        queue.dequeue();
      } else if (parseInt(instruction) === 3) {
        // print queue at 0
        console.log(queue.getFrontItem());
      }
    } else {
      // it is in insert
      let valueToInsert = parseInt(instruction.split(' ')[1]);
      queue.enqueue(valueToInsert);
    }
  }
}

let input =
`10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(input);