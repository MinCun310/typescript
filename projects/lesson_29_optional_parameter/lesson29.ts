//optional params: là tham số có thể có hoặc không
const lesson29 = (x: number, y: number, z?: number) => {
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log('sum: ', lesson29(1, 2));