const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, phoneNumber) {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;