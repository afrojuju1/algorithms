// Finding Lakes
// Part 1:
// We are given a one dimensional terrain represented by an array, where the index
// represents the X coordinate and the value represents the altitude (Y coordinate).
// Write a function to print the terrain to terminal. Use + to represent earth.

// Example:
// A terrain of [5,4,2,1,2,3,2,1,0,1,2,4] will look like:

// >>> print_terrain(terrain)
// +
// ++         +
// ++   +     +
// +++ +++   ++
// ++++++++ +++
// ++++++++++++

// terrain = [0,0, 0, 0]

const printTerrain = (terrain) => {
  const terrainDup = [...terrain]
  terrainDup.sort((a, b) => b - a)
  let maxHeight = terrainDup[0]

  let base = ''
  for (let j = 0; j < terrain.length; j++) {
    base = base + '+'
  }

  const result = [base]
  // console.log(maxHeight)
  // console.log(terrain)
  while (maxHeight > 0) {
    let str = ''

    for (let i = 0; i < terrain.length; i++) {
      if (terrain[i] > 0) {
        str = str + '+'
        terrain[i]--
      } else {
        str = str + ' '
      }
    }
    result.push(str)
    maxHeight--
  }

  for (let j = result.length - 1; j >= 0; j--) {
    console.log(result[j])
  }

  // const finalResult = result.reverse()
  // console.log(finalResult)
  // while the array is not all zeros, print the terrain to result
}

// const terrain = [5,4,2,1,2,3,2,1,0,1,2,4]
// const result = printTerrain(terrain)


// Part 2:
// We also have a bucket of water. We dump this bucket of water in a single point of the terrain, and the water will collect at various points of the basins in the terrain. Write a function which takes in the terrain, the amount of water, dump point, and then print out the image of the resulting terrain. Use W to represent water.

// Example:
// terrain = [5,4,2,1,2,3,2,1,0,1,2,4]
// water_amount = 8
// dump_location = 10

// >>> fill(terrain, water_amount, dump_location)
// +
// ++         +
// ++   + WWWW+
// +++ +++WWW++
// ++++++++W+++
// ++++++++++++

const genTerrainStr = (terrain) => {
  let str = ''

  for (let i = 0; i < terrain.length; i++) {
    if (terrain[i] > 0) {
      str = str + '+'
      terrain[i]--
    } else {
      str = str + ' '
    }
  }
  return str
}


const getWaterIndex = (terrain, dumpLocation) => {
  // find where the water should be dumped

  // search the right side of dumpLocation
  let pointer = dumpLocation
  for (let j = dumpLocation + 1; j < terrain.length; j++) {
    if (terrain[j] < terrain[dumpLocation] && terrain[pointer] > terrain[j]) {
      // you found where water should go
      pointer = j
    }
  }

  // search the left side of dumpLocation
  for (let j = dumpLocation - 1; j >= 0; j--) {
    if (terrain[j] < terrain[dumpLocation] && terrain[pointer] > terrain[j]) {
      // you found where water should go
      pointer = j
    }
  }

  if (terrain[0] > terrain[pointer] && terrain[terrain.length - 1] > terrain[pointer]) {
    return pointer
  }

  return -1
}

const fill = (terrain, waterAmount, dumpLocation) => {
  let base = ''
  for (let j = 0; j < terrain.length; j++) {
    base = base + '+'
  }
  const result = [base]

  const terrainDup = [...terrain]
  terrainDup.sort((a, b) => b - a)
  let maxHeight = terrainDup[0]

  for (let w = 0; w < waterAmount; w++) {
    const waterIndex = getWaterIndex(terrain, dumpLocation)
    if (waterIndex !== -1) {
      terrain[waterIndex] += 1
    }
  }

  printTerrain(terrain)

  // while (maxHeight > 0) {
  //     for (let w = 0; w < waterAmount; w++) {

  //     }
  //     maxHeight--
  // }
}

const terrain = [5,4,2,1,2,3,2,1,0,1,2,4]
const result = fill(terrain, 8, 10)
