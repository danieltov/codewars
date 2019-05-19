/*

Very simple, given a number, find its opposite.


*/

function opposite(number) {
  return Math.sign(number) === 1 ? parseInt('-' + number) : Math.abs(number);
}

// added email
