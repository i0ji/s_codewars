function twoArePositive(a: number, b: number, c: number): boolean {
    return ([a,b,c].filter(elem=>elem>0).length == 2)
}