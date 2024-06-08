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