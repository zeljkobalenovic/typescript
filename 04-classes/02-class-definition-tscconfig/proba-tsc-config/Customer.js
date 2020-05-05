"use strict";
var Customer7 = /** @class */ (function () {
    function Customer7(param1, param2) {
        this._firstName = param1;
        this._lastName = param2;
    }
    Object.defineProperty(Customer7.prototype, "lastName", {
        // vs code automatski moze da generise accessore isto kao getere+setere u javi 
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer7.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: true,
        configurable: true
    });
    return Customer7;
}());
var customer7 = new Customer7("Milica", "Kostic");
console.log(customer7.firstName);
console.log(customer7.lastName);
