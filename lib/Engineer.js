const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, phoneNumber) {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;