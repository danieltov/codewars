const digital_root = function(n) {
  console.log(n)
  n = Number(
    String(n)
      .split('')
      .reduce((acc, val) => Number(acc) + Number(val))
  )
  return n > 9 ? digital_root(n) : n
}
