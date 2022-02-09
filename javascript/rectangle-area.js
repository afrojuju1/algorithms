// https://leetcode.com/problems/rectangle-area/

/*
public int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {
    if(C<E||G<A )
        return (G-E)*(H-F) + (C-A)*(D-B);

    if(D<F || H<B)
        return (G-E)*(H-F) + (C-A)*(D-B);

    int right = Math.min(C,G);
    int left = Math.max(A,E);
    int top = Math.min(H,D);
    int bottom = Math.max(F,B);

    return (G-E)*(H-F) + (C-A)*(D-B) - (right-left)*(top-bottom);
}
 */

const computeArea = (A, B, C, D, E, F, G, H) => {
  const area = (G - E) * (H - F) + (C - A) * (D - B)
  if (C < E || G < A) {
    return area
  }

  if (D < F || H < B) {
    return area
  }

  const right = Math.min(C, G)
  const top = Math.min(H, D)
  const left = Math.max(A, E)
  const bottom = Math.max(F, B)
  const result = area - (right - left)*(top - bottom)

  // console.log(`areaA ${areaA}, areaB ${areaB}, areaInter ${areaInter}, result ${result}`)
  return result
}
/*
const computeArea = (A, B, C, D, E, F, G, H) => {
  // first:   (A, B) (C, D)
  // second: (E, F) (G, H)
  const widthA = Math.abs(A) + Math.abs(C)
  const lengthA = Math.abs(B) + Math.abs(D)
  const areaA = widthA * lengthA

  const widthB = Math.abs(E) + Math.abs(G)
  const lengthB = Math.abs(F) + Math.abs(H)
  const areaB = widthB * lengthB

  // area of the intersection
  const a = Math.max(A, E) + Math.min(C, G)
  const b = Math.max(B, F) + Math.min(D, H)
  console.log(`a ${a}, b ${b}`)
  const areaInter = a * b
  // if there is no intersection, return single area
  if (areaInter === 0) {
    return Math.max(areaA, areaB)
  }

  const result = areaA + areaB - areaInter

  console.log(`areaA ${areaA}, areaB ${areaB}, areaInter ${areaInter}, result ${result}`)
  return result
} */

// const A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
// const A = -2, B = -2, C = 2, D = 2, E = -2, F = -2, G = 2, H = 2

// const A = 0, B = 0, C = 0, D = 0, E = -1, F = -1, G = 1, H = 1

const A = -2, B = -2, C = 2, D = 2, E = 3, F = 3, G = 4, H = 4
// expected = 17
console.log(computeArea(A, B, C, D, E, F, G, H))
