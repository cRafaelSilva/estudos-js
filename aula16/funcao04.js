function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

function fatorialRecursiva(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorialRecursiva(n - 1);
  }
}

console.log(fatorial(5));
