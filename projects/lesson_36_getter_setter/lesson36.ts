class personLesson36 {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    constructor(_age: number, _firstName: string, _lastName: string) {
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    //getters
    public get age() {
        return this._age;
    }
    //setters
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    } public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}
let lesson36 = new personLesson36(25, "Cường", "Dương");
console.log("get age:", lesson36.age);
lesson36.age = 20;
console.log("set age:", lesson36);
console.log("get age:", lesson36.age);