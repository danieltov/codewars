/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  var vowelsCount = 0;

  for (var i = 0; i < str.length; i++) {
    str[i].search(/[aeiou]/) == 0 ? (vowelsCount += 1) : vowelsCount;
  }
  return vowelsCount;
}

// added email
