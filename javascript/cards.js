// Card Ranks: ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king
// Card Suits: Heart, Diamond, Spade, Club

/*
const cardsDealt = [
  { suit: 'heart', rank: '8' },
  { suit: 'diamond', rank: '2' },
  { suit: 'diamond', rank: 'ace' },
  { suit: 'heart', rank: 'king' },
  { suit: 'spade', rank: '4' },
  { suit: 'club', rank: 'king' },
  { suit: 'spade', rank: 'king' },
  { suit: 'heart', rank: '4' }
]v // 49

Frequency Ranks in Cards Dealt
8 - 1
2 - 1
ace - 1
king - 3
4 - 2

Rank '2' - '10': Value equal to their numerical value
Rank 'jack', 'queen', 'king': Value of 10
Rank 'ace': Value of 1

Compute hand total

Dealer Number
44 -> return true print I win
55 -> return false print I lose


ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king
Shift -2
*/

const calcShift = (cards, shift) => {
  const valueToRankMap = {
    1: 'ace',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'jack',
    12: 'queen',
    13: 'king'
  }

  const rankToValueMap = {
    'ace': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'jack': 11,
    'queen': 12,
    'king': 13
  }

  const direction = shift < 0 ? 'left' : 'right'
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    // calculate new shift position
    const rankVal = rankToValueMap[card.rank]
    let pos = shift + rankVal // -1
    if (direction === 'right') {
      while (pos > 13) {
        pos -= 13
      }
    } else {
      while (pos < 0) {
        pos += 13
      }
    }

    if (pos === 0) {
      pos = 1
    }

    // pos = Math.abs(pos)
    console.log('pos: ', pos)
    card.rank = valueToRankMap[pos]
  }

  console.log(cards)
}

const findFreq = (cards, dealerNumber) => {
  const rankMap = new Map()

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    const freq = rankMap.get(card.rank)

    if (freq) {
      rankMap.set(card.rank, freq + 1)
    } else {
      rankMap.set(card.rank, 1)
    }
  }


  let handTotal = 0
  rankMap.forEach((value, key, map) => {
    console.log(`rank ${key}, freq ${value}`)
    if (['jack', 'queen', 'king'].includes(key)) {
      handTotal += 10 * value
    } else if (key === 'ace') {
      handTotal += 1 * value
    } else {
      console.log('intVal ', parseInt(key))
      handTotal += parseInt(key) * value
    }
  })

  console.log('handTotal ', handTotal)
  return dealerNumber >= handTotal ? 'I lose' : 'I Win!!!'
}

const cardsDealt = [
  { suit: 'heart', rank: '8' },
  { suit: 'diamond', rank: '2' },
  { suit: 'diamond', rank: 'ace' },
  { suit: 'heart', rank: 'king' },
  { suit: 'spade', rank: '4' },
  { suit: 'club', rank: 'king' },
  { suit: 'spade', rank: 'king' },
  { suit: 'heart', rank: '4' }
]

// console.log(findFreq(cardsDealt, 10))

console.log(calcShift(cardsDealt, -50))
