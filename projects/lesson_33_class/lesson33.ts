class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let lessson33 = new Person("123", "Cường", "Dương");
console.log("Person:", lessson33)
console.log("Person:", lessson33.getFullName())