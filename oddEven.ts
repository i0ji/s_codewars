export function sortMyString(s: string): string {
  let odd: string[] = [];
  let even: string[] = [];
  let str = s.split('');
  for (let i = 0; i <= str.length; i++) {
    i % 2 === 0 ? even.push(str[i]) : odd.push(str[i]);
  }
  return even.join(``) + ' ' + odd.join(``);
}

console.log(sortMyString('CodeWars'));
