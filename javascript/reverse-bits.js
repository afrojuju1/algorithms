// https://leetcode.com/problems/reverse-bits/

/*
    public static int reverseBits(int n)
    {
        int rev = 0;

        // traversing bits of 'n'
        // from the right
        while (n > 0)
        {
            // bitwise left shift
            // 'rev' by 1
            rev <<= 1;

            // if current bit is '1'
            if ((int)(n & 1) == 1)
                rev ^= 1;

            // bitwise right shift
            //'n' by 1
            n >>= 1;
        }
        // required number
        return rev;
    }
 */

const reverseBits = (n) => {
  let rev = 0
  while (n > 0) {
    rev <<= 1
    if (n & 1 === 1) {
      rev ^= 1
    }

    n >>= 1
  }

  return rev

  // const nS = (n).toString(2) // binary conversion
  // console.log(`ns ${nS}, length ${nS.length}`)
  // let i = 0
  // while (i < nS.length) {
  //   rev <<= 1
  //   console.log(`i ${i}, bit ${nS.charAt(i)}, rev: ${rev}`)
  //   i++
  // }
}

const n = 43261596 // -> 00000010100101000001111010011100
// expected: 964176192 -> 00111001011110000010100101000000
// const n = `00000010100101000001111010011100`
console.log(reverseBits(n))
