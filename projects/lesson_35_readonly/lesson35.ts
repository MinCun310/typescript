//readonly => chỉ đọc => KHÔNG MODIFY (UPDATE/DELETE) 
//Typescript cung cấp công cụ 'readonly' để đánh dấu 1 một thuộc tính 'immutable'
class personLesson35 {
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let lesson35 = new personLesson35(new Date(1990, 12, 25));// khai báo rồi thì không thể sửa đổi
// person.birthDate = new Date(1991, 12, 25); // Compile error