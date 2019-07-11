const isIsogram = str => {
  const letters = str.toLowerCase().split('').sort();
for (let i = 0; i < letters.length; i++) {
    if(letters[i + 1] === letters[i]) return false 
  }
  return true
}