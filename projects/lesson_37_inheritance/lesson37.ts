class lesson37 {
    private firstName: string;
    private lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee1 extends lesson37 {
    private jobTitle: string;
    constructor(firstName: string, lastName: string, jobTitle: string) {
        // call the constructor of the Person class: 
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    // overwrite (ghi đè)
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let employee = new Employee1('John', 'Doe', 'Web Developer');
console.log(employee.describe());