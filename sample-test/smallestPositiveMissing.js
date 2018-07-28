/*Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
*/

//Try 3. Research: http://theoryofprogramming.com/2017/12/17/first-missing-integer-unsorted-array/
function solution(A) {
  //key insight: answer will always be from 1 to A.length + 1, inclusive

  //keep track of the presence of values in stack. time O(n)
  let isInA = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= A.length) {
      isInA[A[i]] = true
    }
  }

  //added for array of negatives case
  // if (isInA.length === 0) {
  //   return 1
  // }

  // time O(n)
  //iterate through array from 1 to A.length. If something does not exist, return the number
  for (let i = 1; i < isInA.length; i++) {
    if (!isInA[i]) {
      return i
    }
  }

  return isInA.length === 0 ? 1 : A.length //correction for 2 failing codility test cases
}

/*Try 2. Big O either O(n) or O(nlogn). 100% correctness. 100% performance
function solution(A) {
  //sort array. sort() time and space complexity varies. Most likely O(nlogn)
  let arrSortedAsc = A.sort((a,b) => {return a - b})

  //then check each element with counter. time O(n)
  let counter = 1
  for (let i = 0; i < A.length; i++) {
    if (arrSortedAsc[i] === counter) {
      counter++
    }

    if (counter < arrSortedAsc[i]) {
      return counter
    }
  }

  return counter
}
*/

/*First try. Codility says O(n^2). 100% correctness. 0% performance
function solution(A) {
    //make arr of positive int from 1 to 1000000; time O(n); space
    let positiveIntArr = []
    for (let i = 1; i <= 1000000; i++) {
      positiveIntArr.push(i)
    }

    //iterate through A and remove from positive arr; time O(n^2); space
    for (let i = 0; i < A.length; i++) {
      if (A[i] > 0) {
        let index = positiveIntArr.indexOf(A[i]); //iterates... so iteration within iteration
        if (index > -1) {
          positiveIntArr.splice(index, 1);
        }
      }
    }

    //return first element from positive arr; time O(1)
    return positiveIntArr[0]
}
*/

console.log("5?", solution([1, 3, 6, 4, 1, 2]))
console.log("4?", solution([1, 2, 3]))
console.log("1?", solution([-1, -3]))
