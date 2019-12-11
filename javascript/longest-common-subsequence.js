/*
  Find the longest common subsequence of two strings.
  example: s1 = ABCDGH, s2 = AEDFHR; result = ADH
  example: s1 = AGGTAB, s2 = GXTXAYB; result = GTAB
 */
const LCS = (s1, s2) => {
  const lcsMatrix = []

  for (let i = 0; i <= s1.length; i++) {
    lcsMatrix[i] = [] // initialize row empty array
    for (let j = 0; j <= s2.length; j++) {
      // initialize empty row/column
      if (i === 0 || j === 0) {
        lcsMatrix[i][j] = 0;
      }
      // if match, 1 + value of diagonal cell value
      else if (s1[i - 1] === s2[j - 1]) {
        lcsMatrix[i][j] = 1 + lcsMatrix[i - 1][j - 1];
      }
      // if does not match, take max of adjacent cells
      else {
        lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1])
      }
    }
  }

  // walk the matrix to find subsequences
  // start from bottom-most, right-most cell
  let m = s1.length
  let n = s2.length
  let longestLength = lcsMatrix[m][n]

  const subSequence = []
  while (m > 0 && n > 0) {
    const value = lcsMatrix[m][n]
    const leftCellValue = lcsMatrix[m - 1][n]
    const topCellValue = lcsMatrix[m][n - 1]
    const maxOfLeftAndRight = Math.max(topCellValue, leftCellValue)
    // if max does not equal top or left cell value, it is part of the subsequence.
    // add to subsequence and move diagonally
    if (value !== maxOfLeftAndRight) {
      subSequence[longestLength - 1] = s1[m - 1]
      m--
      n--
      longestLength--
    }
    // if equals to leftCell, move left
    else if (value === leftCellValue) {
      m--
    } else {
      // move top
      n--
    }
  }

  return subSequence.join('')
}

const caseA = {
  s1: 'ABCDGH',
  s2: 'AEDFHR',
  result: 'ADH',
}

const caseB = {
  s1: 'AGGTAB',
  s2: 'GXTXAYB',
  result: 'GTAB',
}

console.log(LCS(caseA.s1, caseA.s2))
// console.log(LCS(caseB.s1, caseB.s2))

// console.log(LCS(s1, s2));
