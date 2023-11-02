// Union Type
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
function addNumberOrString(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }
    throw Error('Parameters must be number or string')
}
console.log('result: ', addNumberOrString('alo', 'alo'))