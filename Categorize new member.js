function openOrSenior(n) {
  for (i = 0; i < n.length; i++) {
    if (n[i][0] >= 55 && n[i][1] > 7) {
      n[i] = `Senior`;
    } else {
      n[i] = 'Open';
    }
  }
  return n;
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
