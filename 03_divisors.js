/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
*/

function divisors(int) {
    var i;
    var arr = [];
    for (i = 2; i < int; i++) {
        if (int % i == 0) {
            arr.push(i);
        }
    }
    if (arr.length == 0) {
        arr = int + ' is prime';
    }
    return arr;
}
