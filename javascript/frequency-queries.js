// https://www.hackerrank.com/challenges/frequency-queries/problem
/**
 * 1 - x: Insert x in your data structure.
 * 2 - y: Delete one occurrence of y from your data structure, if present.
 * 3 - z: Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.
 *
 */

const fs = require('fs')
const filename = process.argv[2]

function freqQuery(queries) {
  let dataCount = new Map();
  let frequency = new Map();
  let outputs = [];
  for (let i = 0; i < queries.length; i++) {
    let operation = queries[i][0];
    let data = queries[i][1];

    let count
    let oldCount
    switch (operation) {
      case 1:
        count = dataCount.get(data);
        oldCount = count;
        count = count ? count + 1 : 1;
        // decrement the number of data's having the old frequency of the treated data
        // console.log(`oldCount: ${oldCount}, count: ${count}`);
        dataCount.set(data, count);

        if (oldCount) {
          // decrement oldCount frequency
          let freq = frequency.get(oldCount);
          freq = freq ? freq - 1 : 0;
          // if (oldCount > )
          frequency.set(oldCount, freq);
        }

        let freq = frequency.get(count);
        freq = freq ? freq + 1 : 1;
        frequency.set(count, freq);

        // increment count frequency
        break;
      case 2:
        count = dataCount.get(data);
        oldCount = count;
        count = count ? count - 1 : 0;
        // console.log(`[case 2] oldCount: ${oldCount}, count: ${count}`);
        if (count <= 0) {
          dataCount.set(data, 0);

          let freq = frequency.get(count);
          freq++;
          frequency.set(count, freq);

          if (oldCount) {
            freq = frequency.get(oldCount);
            freq--;
            frequency.set(oldCount, freq <= 0 ? 0 : freq);
          }
        } else {
          dataCount.set(data, count);
        }
        // if (count <= 0) {
        //   dataCount.delete(data);
        // } else {
        //   dataCount.set(data, count);
        // }
        break;
      case 3:
        let wasFound = frequency.get(data);
        // let values = Array.from(dataCount.values());
        // let wasFound = values.find((e) => e === data);
        outputs.push(wasFound ? 1 : 0);
        break;
    }
  }

  // console.log(frequency);
  return outputs;
}

function main() {
  let queries = [];
  fs.readFile('frequency-queries-input.txt', 'utf8', function (error, data) {
    if (error) throw error
    console.log(data);
    let tt = '';
      //data.replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));

    // let res = maxDifference(a)
    // console.log('response: ', res)
  })

  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  //
  // const q = parseInt(readLine().trim(), 10);
  //
  // let queries = Array(q);
  //
  // for (let i = 0; i < q; i++) {
  //   queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  // }
  //
  // const ans = freqQuery(queries);
  //
  // ws.write(ans.join('\n') + '\n');
  //
  // ws.end();
}

// let queries = [
//   [1, 5],
//   [1, 6],
//   [3, 2],
//   [1, 10],
//   [1, 10],
//   [1, 6],
//   [2, 5],
//   [3, 2]
// ];
// let expected = [0, 1];

// let queries = [
//   [1, 3],
//   [2, 3],
//   [3, 2],
//   [1, 4],
//   [1, 5],
//   [1, 5],
//   [1, 4],
//   [3, 2],
//   [2, 4],
//   [3, 2]
// ];
//
// let expected = [0, 1, 1];

// let outs = freqQuery(queries);
// console.log(outs);