// https://www.hackerrank.com/challenges/balanced-brackets/problem

let leftItems = ['{', '[', '('];
let rightItems = ['}', ']', ')'];
let itemsMap = new Map();

for (let i = 0; i < 3; i++) {
  let rightI = rightItems[i];
  let leftI = leftItems[i];
  let itemR = {
    item: rightI,
    weight: i + 1,
    inverse: leftI,
    isLeft: false,
  };
  itemsMap.set(rightI, itemR);

  let itemL = {
    item: leftI,
    weight: i + 1,
    inverse: rightI,
    isLeft: true
  };
  itemsMap.set(leftI, itemL);
}

function isBalanced(s) {
  let items = s.split('');

  let stack = [];
  let index = 0;
  while (index < items.length) {
    let item = items[index];
    let itemObj = itemsMap.get(item);
    if (itemObj.isLeft) {
      if (index === items.length - 1) {
        return 'NO';
      }

      stack.push(itemObj);
      index++;
      continue;
    }

    if (!isInverseOfItemInStack(stack, itemObj)) {
      return 'NO';
    }

    index++;
  }

  return 'YES';
}

function isInverseOfItemInStack(stack, itemObj) {
  let stackItemObj = stack.pop();
  let newStack = [];
  while (stackItemObj) {
    let inverseItemObj = itemsMap.get(stackItemObj.inverse);

    if (inverseItemObj.weight === itemObj.weight) {
      // verify all items in newStack is balanced since rule is everything within an opening/closing must also open/close.
      if (newStack.length) {
        let s = newStack.join('');
        return isBalanced(s) === 'YES';
      }

      return true;
    }

    // else keep searching
    newStack.push(stackItemObj.item);
    stackItemObj = stack.pop();
  }

  return false;
}

// expected: yes
// let s = '{[()]}';

// expected: no
// let s = '{[(])}';

// expected: yes
// let s = '{{[[(())]]}}';

// expected: yes
// let s = '[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]';

// expected: no
// let s = '{{}(';

// expected: yes
// let s = '()(){{}}[()()]{}{}';

// yes
// let s = '[{}]{[()({[{}]})]}';

// no
// let s = '}][}}(}][))]';

// yes
// let s = '[](){()}';

// yes
// let s = '()';

// yes
// let s = '({}([][]))[]()';

// no
// let s = '{)[](}]}]}))}(())(';

// no
let s = '([[)';
console.log(`isBalanced: `, isBalanced(s));