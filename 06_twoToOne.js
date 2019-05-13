/*

Make 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

Examples:

========
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
========

*/

function longest(s1, s2) {
    var arr = s1
        .split('')
        .concat(s2.split(''))
        .sort();
    var s3 = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (s3.charAt(s3.length - 1).localeCompare(arr[i]) === -1) {
            s3 = s3 + arr[i];
        } else if (s3.charAt(s3.length - 1).localeCompare(arr[i]) === 1) {
            s3 = arr[i] + s3;
        }
    }
    return s3;
}
