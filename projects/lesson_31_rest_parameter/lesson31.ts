// rest: phần còn lại
// spread syntax

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log("Total=", getTotal()); // 0
console.log("Total=", getTotal(10, 20)); // 30
console.log("Total=", getTotal(10, 20, 30)); // 60

function multiply(n: number, ...m: number[]) {
    let a = m.map((x) => {
        console.log("check x=", x);
        return n * x;
    });
    return a
}
console.log('multiply: ', multiply(10, 1, 2, 3, 4))

function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
console.log("greet:", Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log("greet:", Greet("Hello"));// returns "Hello !"