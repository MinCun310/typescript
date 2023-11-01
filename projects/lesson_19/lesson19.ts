// Aliases
type nameType = number | boolean | string
function lesson19(a: nameType, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }
    throw Error('Parameters must be number or string')
}
console.log('result: ', lesson19('alo', 'alo'))