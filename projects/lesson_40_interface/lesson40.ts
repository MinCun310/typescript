// TypeScript Interfaces 'định nghĩa' cách chúng ta viết code, bằng cách cung cấp các công cụ để có thể kiểm soát chặt chẽ việc khai báo 'type'
// code thừa thuộc tính vẫn sẽ không bị báo lỗi
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`;
// }
// let cuongNe = { firstName: 'John', lastName: 'Doe', address: 'tân bình' };
// console.log(getFullName(cuongNe));

interface LabeledValue {
    label: string;
    price: number;
}
function printLabel(labeledObj: LabeledValue) {
    return `${labeledObj.label} ${labeledObj.price}`
}
let myObj = { size: 10, price: 1000, label: "Size 10 Object" };
console.log(printLabel(myObj));