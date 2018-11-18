/*Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
*/

//Try 3. Research: http://theoryofprogramming.com/2017/12/17/first-missing-integer-unsorted-array/
//Codility 100% correctness & 100% performance.
function solution(A) {
  //key insight: answer will always be from 1 to A.length + 1, inclusive

  //keep track of the presence of values in stack. time O(n)
  let isInA = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= A.length) {
      isInA[A[i]] = true
    }
  }

  // iterate through arr and check if exists in A. If not, return it. time O(n)
  for (let i = 0; i <= isInA.length; i++) {
    if (!isInA[i + 1]) {
      return i + 1
    }
  }
}

module.exports = solution
