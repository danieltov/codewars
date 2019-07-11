const stray = nums => {
  const sorted = nums.slice().sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i-1]) return sorted[i]
  }
}