// overloading: định nghĩa các hàm có tên giống nhau, giống như ghi đè (thằng sau ghi đè lên thằng trước)

// overloading
function lesson32(a: number, b: number): number;

function lesson32(a: string, b: string): string;

function lesson32(a: any, b: any): any {
    return a + b;
}
console.log("check add new: ", lesson32(6, 9), lesson32("Hello", " world"))

// demo sơ lược về class (method overloading)
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}
let counter111 = new Counter();
console.log(counter111.count()); // return a number 
console.log(counter111.count(20)); // return an array