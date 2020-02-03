// https://leetcode.com/problems/generate-parentheses/

/*
def printParenthesis(str, n):
    if(n > 0):
        _printParenthesis(str, 0,
                          n, 0, 0);
    return;

def _printParenthesis(str, pos, n,
                      open, close):

    if(close == n):
        for i in str:
            print(i, end = "");
        print();
        return;
    else:
        if(open > close):
            str[pos] = '}';
            _printParenthesis(str, pos + 1, n,
                              open, close + 1);
        if(open < n):
            str[pos] = '{';
            _printParenthesis(str, pos + 1, n,
                              open + 1, close); 
 */

const generateParenthesis = (n) => {
  const result = []
  for (let i = 0; i < n; i++) {

  }
}

const n = 3
// const expected = [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const n = 1
generateParenthesis(n)
