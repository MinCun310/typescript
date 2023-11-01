// khai báo biến c với 1 giá trị, và có thể ghi đè giá trị đó
const lesson30 = (a: number, b: number, c: number = 5) => {
    return a + b + c;
}
console.log('sum: ', lesson30(1, 2, 3), "\n", lesson30(1, 2));