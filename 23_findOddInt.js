/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


*/

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let loc = [];
    let e = A[i];
    let index = A.indexOf(e);

    while (index != -1) {
      loc.push(index);
      index = A.indexOf(e, index + 1);
    }
    if (loc.length % 2 != 0) return A[i];
  }
}

// Or, the Bitwise solution I don't totally understand.

function findOddBitwise(x) {
  return x.reduce((l, r) => l ^ r);
}
