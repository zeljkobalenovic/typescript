"use strict";
var Customer6 = /** @class */ (function () {
    function Customer6(param1, param2) {
        this._firstName = param1;
        this._lastName = param2;
    }
    Object.defineProperty(Customer6.prototype, "lastName", {
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
    Object.defineProperty(Customer6.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: true,
        configurable: true
    });
    return Customer6;
}());
var customer6 = new Customer6("Milica", "Korac");
console.log(customer6.firstName);
console.log(customer6.lastName);
