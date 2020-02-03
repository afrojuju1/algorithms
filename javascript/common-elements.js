/*
  https://www.udemy.com/course/11-essential-coding-interview-questions/learn/quiz/378256#overview
 */

const arrToMap = (arr) => {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    map[value] = i + 1
  }

  return map
}

const findCommon = (mainMap, secondMap) => {
  const common = []
  Object.keys(mainMap).forEach(key => {
    if (mainMap[key] && secondMap[key]) {
      // is in both array
      common.push(key)
    }
  })

  return common
}

const commonElements = (arrA, arrB) => {
  const arrAMap = arrToMap(arrA)
  const arrBMap = arrToMap(arrB)
  console.log('aMap: ', arrAMap)
  console.log('bMap: ', arrBMap)

  const aKeys = Object.keys(arrAMap)
  const bKeys = Object.keys(arrBMap)
  if (aKeys.length <= bKeys.length) {
    // process based on aKeys
    return findCommon(arrAMap, arrBMap)
  } else {
    // process based on bKeys
    return findCommon(arrBMap, arrAMap)
  }
}

// const A = [1, 3, 4, 6, 7, 9]
// const B = [1, 2, 4, 5, 9, 10]
// const expected = [1, 4, 9]

const A = [1, 2, 9, 10, 11, 12]
const B = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
const expected = [1, 2, 9, 10, 12]
console.log(commonElements(A, B))
