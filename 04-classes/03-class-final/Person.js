"use strict";
// Klase praviti na sledeca dva nacina 
// TRADICIONALNI
var Person1 = /** @class */ (function () {
    // ... vise propertija
    function Person1(param1, param2) {
        this._firstName = param1;
        this._lastName = param2;
    }
    Object.defineProperty(Person1.prototype, "firstName", {
        // accessori za parametre ( po defaultu su public - nije neophodno )
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
// Koriscenje klase Person1
var person1 = new Person1('Ana', 'Bjelica'); // eksplicitan tip
person1.firstName = 'Marijana';
console.log(person1.lastName);
// ... itd.
// -------------------------------------------------------------------------------------------------------------------
// MODERNI-KRACI (properties parametri konstruktora) - OVO NAJCESCE
var Person2 = /** @class */ (function () {
    // potpuno isto kao gore (ovakav konstruktor ce napraviti propertije i dodeliti im vrednost)
    function Person2(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Person2.prototype, "firstName", {
        // accessori za parametre
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
// Koriscenje klase Person2
var person2 = new Person2('Marija', 'LJubicic'); // implicitan tip
person2.firstName = 'Darija';
console.log(person2.lastName);
// ... itd.
//--------------------------------------------------------------------------------------------------------------------
