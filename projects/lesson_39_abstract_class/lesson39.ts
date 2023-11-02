// 1 abstract class có thể chứa: 
// - 1 hoặc nhiều 'normal' method 
// - 1 hoặc nhiều abstract method: đối với loại này, không chứa phần body, chỉ định nghĩa tên method
abstract class lesson39 {
    private firstName: string
    private lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    abstract getSalary(): number; //abstract method //normal method 
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// const e = new lesson39("Eric", "Hỏi Dân IT"); đối với abstract class không thể tạo mới object
// chỉ dùng kế thừa để sử dụng abstract class

class FullTimeEmployee extends lesson39 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); //dùng super để kế thừa lại cha }// cần viết method này, vì nó được khai báo abstract ở trên 
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends lesson39 {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let e1 = new FullTimeEmployee('Eric', 'Hoi Dan IT', 12000);
let e2 = new Contractor('Eric', 'Hoi Dan IT', 100, 160);
console.log(e1.compensationStatement());
console.log(e2.compensationStatement());