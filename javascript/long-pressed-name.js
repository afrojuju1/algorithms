const isLongPressedName = (name, typed) => {
  // keep two maps, one to track of name char count
  const nameMap = getMap(name)
  const typedMap = getMap(typed)

  // loop over nameMap, verify char count <= count in typedMap
  for (const ch of nameMap.keys()) {
    const nCount = nameMap.get(ch)
    const tCount = typedMap.get(ch)
    console.log(`ch ${ch}, nCount ${nCount}, tCount ${tCount}`)

    if (!tCount) {
      return false
    }

    if (nCount > tCount) {
      // exit early.
      console.log('about to exit')
      return false
    }
  }

  return true
}

const getMap = (s) => {
  let stringMap = new Map()
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i)
    const count = stringMap.get(ch)
    if (count) {
      stringMap.set(ch, count + 1)
    } else {
      stringMap.set(ch, 1)
    }
  }

  return stringMap
}

// const name = 'xnhtq'
// const typed = 'xhhttqq'

const name = 'kikcxmvzi'
const typed = 'kiikcxxmmvvzz'
console.log(isLongPressedName(name, typed))
