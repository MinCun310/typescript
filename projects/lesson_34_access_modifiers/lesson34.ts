// public
class Employee {
    public empCode: string;
    public empName: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new Employee("456", "test");
emp.empCode = '123';
emp.empName = "Swati";
console.log("check emp: ", emp)

// private
class Employee2 {
    private empCode: string;
    private empName: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp2 = new Employee2("456", "test");
console.log("check emp: ", emp2)

// protected