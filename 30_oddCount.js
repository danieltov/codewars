// Given a number n, return the number of positive odd numbers below n,

const oddCount = n => {
  let count = 0;
  for (let i = n - 1; i > 0; --i) i & 1 && count++;
  return count;
};
