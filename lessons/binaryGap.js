/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).
*/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    //convert integer to binary representation
    let binaryArr = convertIntToBin(N).split("")

    let gapCount = []
    let count = 0
    //count zeroes in-between ones.
    for (let i = 0; i < binaryArr.length; i++) {
      //conditionals?
      if (binaryArr[i - 1] === 1 && binaryArr[i] === 0 && count === 0) {
        count++
      } else if (binaryArr[i] === 0 && count > 0) {
        count++
      } else if (binaryArr[i] === 1 && count > 0) {
        gapCount.push(count)
        count = 0
      }
    }

    //return greatest count
    return gapCount.length === 0 ? 0 : gapCount.max
}

function convertIntToBin(dec) {
  let bits = [];
  let dividend = dec;
  let remainder = 0;
  while (dividend >= 2) {
      remainder = dividend % 2;
      bits.push(remainder);
      dividend = (dividend - remainder) / 2;
  }
  bits.push(dividend);
  bits.reverse();
  return bits.join("");
}

Array.max = function( array ){
  return Math.max.apply( Math, array );
};

console.log("1001", convertIntToBin(9), (Number(1001) === Number(convertIntToBin(9))))
console.log("1000010001", convertIntToBin(529), (Number(1000010001) === Number(convertIntToBin(529))))
console.log("10100", convertIntToBin(20), (Number(10100) === Number(convertIntToBin(20))))
console.log("1111", convertIntToBin(15), (Number(1111) === Number(convertIntToBin(15))))
console.log("100000", convertIntToBin(32), (Number(100000) === Number(convertIntToBin(32))))
console.log("10000010001", convertIntToBin(1041), (Number(10000010001) === Number(convertIntToBin(1041))))
console.log("---------------------")
console.log(solution(9))