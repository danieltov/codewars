const findEvenIndex = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i).reduce((acc, val) => acc + val, 0)
    const right = arr
      .slice(i + 1, arr.length)
      .reduce((acc, val) => acc + val, 0)

    if (left === right) {
      return i
    } else {
      continue
    }
  }
  return -1
}
