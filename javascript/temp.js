/*
startState -> int
acceptStates -> []
transitions -> { [current_state/character]: next_state }
*/

const machine = {
  startState: 0,
  accepyStates: [2],
  transitions: {
    '0/a': 1,
    '1/b': 2,
    '2/a': 1,
    '2/c': 2
  }
}

const is_valid = (state_machine, input) => {
  let start = state_machine.startState
  let lastState = null
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i)
    const key = `${start}/${char}`
    lastState = state_machine.transitions[key]
    // console.log(`key: ${key}, nextState: ${lastState}`)
    start = lastState
  }

  // console.log(`lastState: ${lastState}`)
  return state_machine.accepyStates.includes(lastState)
}

const is_empty = (state_machine) => {
  /*
  [a, b, ac]
  a
  ab
  abc
  aba
  abab

  abac
  b
  bac
  ac
  */

// can stop when at end state or you have encountered the nextState

  const inputMap = {}
  let start = state_machine.startState

  // gather the list of possible inputs
  for (const key in state_machine.transitions) {
    // state -> 0, char -> a
    const [state, char] = key.split('/')
    const prevChar = inputMap[state]
    if (prevChar) {
      inputMap[state] = `${prevChar}${char}`
    } else {
      inputMap[state] = char
    }
    start = state
  }

  for (const key in inputMap) {
    const input = inputMap[key]
    const isV = is_valid(state_machine, input)
    console.log(`input ${input}, isV ${isV}`)
    if (isV) {
      return false
    }
  }

  return true
  // console.log(inputMap)
}

// console.log(is_valid(machine, "abb"))

console.log(is_empty(machine))


/**
 * State Machine
 *
 * Properties of State Machine
 *. 1. Start State
 *. 2. Set of Accepting States
 *. 3. Set of Transitions
 *.    (current_state, character) -> next_state
 *
 * Example State Machine
 *. 1. Start State: 0
 *. 2. Set of Accepting States: {2}
 *. 3. Set of Transitions:
 *.    (0, 'a') -> 1
 *.    (1, 'b') -> 2
 *.    (2, 'a') -> 1
 *
 * Example Input: "abab"
 *.  "abab" (0) -> "bab" (1) -> "ab" (2) -> "b" (1) -> "" (2) -> Input is Valid
 *
 * We say that a given input is valid for a state machine iff:
 *. 1. For every character in our input, there was a transition.
 *. 2. After processing all characters in our input, we are in an accepting state.
 *
 * To Implement:
 *.  is_valid(state_machine, input) -> True if the input is valid for the given state_machine, otherwise False.
 *.  is_empty(state_machine) -> True if there does not exist any input, such that is_valid(state_machine, input) -> True, otherwise False.
 **/
