/*

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr(n, s) {
  return s.repeat(n);
}

/* OR */

function repeat(num, str) {
  let newStr = new String();
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
