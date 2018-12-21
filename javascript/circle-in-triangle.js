/**
 * Problem: count the number of circles in a triangle.
 * circlesInTriangle accepts parameter n and returns an integer.
 * n = number of circles on one side of the triangle. find f(n)
 * Example:
 * n = 1. f(n) = 1
 * n = 2. f(n) = 3
 * n = 3. f(n) = 6
 * n = 4. f(n) = 10
 * n = 5. f(n) = 15
 */

// solved in O(n)
function circlesInTriangle (n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

let n = 5;
console.log('total: ', circlesInTriangle(n));
