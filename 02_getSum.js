/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function GetSum(a, b) {
    var n = Math.abs(a - b) + 1;
    return (n * (a + b)) / 2;
}
