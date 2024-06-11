class Figure {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    isSquare() {
        return this.width === this.height;
    }
}

let chamber = new Figure(228, 232)
console.log(chamber)
console.log(new Figure(100, 100).isSquare())
console.log('\n\n')

class User {
    private _username;
    private _password;
    private _id;

    constructor(username, password, id) {
        this._username = username;
        this._password = password;
        this._id = id
    }

    set password(value) {
        this._password = value;
    }
    get password() {
        return this._password
    }
}

let admin = new User('admin', 'qwertyui', '0')
console.log(admin)
admin.password = 'new pass'
console.log(admin.password)
console.log('\n\n')


