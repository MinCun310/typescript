//Để truy cập 1 thuộc tính static: <ClassName>.< StaticMember> 
//chúng ta sử dụng class name và dot notation, mà không cần 'tạo mới' 1 object
class Circle {
    static pi: number = 3.14;
    public test: string = "testing"
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
console.log('check pi:', Circle.pi); // returns 3.14 Circle.calculateArea(5); // returns 78.5
let t = new Circle;
console.log('check test:', t.test);
console.log('check circle area:', Circle.calculateArea(5));