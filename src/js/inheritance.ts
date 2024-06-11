class Person {
    private _firstname;
    private _lastname;
    private _age;

    constructor(f, l, a) {
        this._firstname = f;
        this._lastname = l;
        this._age = a;
    }

    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}

class Employee extends Person {
    private _inn;
    private _number;
    private _snils;

    constructor(f, l, a, inn, number, snils) {
        super(f, l, a);
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }
}


console.log(new Employee('Anna', 'Ivanova', 18, 123, +7, 200))

class Developer extends Employee {
    private _lavel;
    private _language;

    constructor(firstname, lastname, age, inn, number, snils, lavel, language) {
        super(firstname, lastname, age, inn, number, snils);
        this._lavel = lavel;
        this._language = language
    }
}

let hh = new Developer('Alexey', 'Mikhalev', 28, 111, 42, 256, 'junior', 'JS');
console.log(hh)