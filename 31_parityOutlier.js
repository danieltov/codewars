function findOutlier(arr) {
  if (typeof arr !== 'object') {
    return null;
  } else {
    let oddEls = arr.filter(n => n % 2 === 1 || n % 2 === -1);
    let evenEls = arr.filter(n => n % 2 === 0);
    let nullEls = arr.filter(n => n === null);

    if (nullEls.length) return null;
    return oddEls.length > 1 ? evenEls[0] : oddEls[0];
  }
}
