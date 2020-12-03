// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
  return input
    .split('\n')
    .map((string) => {
      var character = string.match(new RegExp(`[${markers.join('')}]`, 'g'));
      if (character) {
        var index =
          string.indexOf(character) !== -1 ? string.indexOf(character) : null;
        return string.substring(0, index).trim();
      }
      return string.trim();
    })
    .join('\n');
}
