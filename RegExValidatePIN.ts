export class Kata {
    static validatePin(pin: string): boolean {
        return (pin.length === 4 || pin.length === 6) && (!/\D/.test(pin))
    }
}




console.log(Kata.validatePin('1234')) // true
console.log(Kata.validatePin('12345')) // false
console.log(Kata.validatePin('aaaa')) // false
console.log(Kata.validatePin('0aaa')) // false
console.log(Kata.validatePin('a234')) // false
