// input: 2 string arrays String[]
// longer: paragraph, shorter: keywords
// output: the shortest subarray from paragraph that contains all the keywords

// longer: [ 'somestring', 'otherstring', 'keywordsofsomestring' ]
// shorter: [ 'keywords' ]
// it has to be an exact match!

// paragraph: [the shortest subarray from paragraph that contains all the keywords]
// keywords: [that contains the keywords]
// it has to be continuous

// paragraph: [the shortest subarray from paragraph that contains all the keywords]
// keywords: [that keywords the subarray]
// it has to be continuous

// 0 - 1 - 2 - 3 - 4
// the-shortest-subarray-from-paragraph
// from the subarray

// from -> 3
// the -> 0
// subarray -> 2

// 0 -> 2 => the-shortest-subarray

// paragraph: [ a d d d d d b d a c c c c c c a]
// keywords: [a b a a a]

const findMin = (paragraph, keywords) => {

  const keywordMap = {}
  const paragraphMap = {}
  const paragraphIndex = {}

  for (const keyword of keywords) {
    if (!keywordMap[keyword]) {
      keywordMap[keyword] = 0
    }
    keywordMap[keyword] += 1
  }

  for (let i = 0; i < paragraph.length; i++) {
    const p = paragraph[i]
    if (!paragraphMap[p]) {
      paragraphMap[p] = 0
    }
    paragraphMap[p] += 1

    if (!paragraphIndex[p]) {
      paragraphIndex[p] = []
    }

    paragraphIndex[p].push(i)
  }

  console.log('pMap ', paragraphMap)
  console.log('pIndex ', paragraphIndex)
  console.log('keywordMap ', keywordMap)

  let minStart = Number.MAX_VALUE
  let maxEnd = Number.MIN_VALUE
  const indecies = []
  for (const keyword of keywords) {
    if (paragraphMap[keyword] < keywordMap[keyword]) {
      return []
    }

    const index = paragraphIndex[keyword]
    indecies.push(...index)
  }


  indecies.sort((a, b) => a - b)
  console.log(indecies)



  return []
}

const paragraph = ['the', 'shortest', 'subarray', 'from', 'paragraph', 'that', 'contains', 'all', 'the', 'keywords']
const keywords = ['that', 'keywords', 'the', 'subarray']
const result = findMin(paragraph, keywords)


// ideal solution is O(N) time and space