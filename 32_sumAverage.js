const sumAverage = arrays => {
  return Math.floor(
    arrays
      .map(array => array.reduce((a, b) => a + b) / array.length)
      .reduce((a, b) => a + b)
  )
}
