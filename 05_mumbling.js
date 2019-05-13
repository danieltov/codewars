/*

Write a function that does this:

-----
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
-----

*/

function accum(s) {
    var newStr = '';
    for (var i = 0; i < s.length; i++) {
        var char = s.substring(i, 1);
        if (i === 0) {
            newStr += char.toUpperCase() + '-';
        } else {
            newStr += char.toUpperCase();
            newStr += char.toLowerCase().repeat(i) + '-';
        }
    }
    return newStr.slice(0, newStr.length - 1);
}
