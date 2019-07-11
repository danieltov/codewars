// func accepts string and returns string without vowels - a,e,i,o,u

const disemvowel = str => str || str.replace(/[aeiou]/gi, '');

disemvowel('I love you! Ay ay!');