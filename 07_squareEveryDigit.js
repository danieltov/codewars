/*

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer


*/

function squareDigits(num) {
    let digits = num
        .toString()
        .split('')
        .map(function(n) {
            return parseInt(n);
        });
    let squares = digits.map(function(n) {
        return n * n;
    });
    let bigNum = parseInt(squares.join(''));
    return bigNum;
}
