"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract klasa ima bar jednu abstraktnu metodu (samo definicija u njoj)
// kad je klasa abstraktna nemoze se praviti instanca klase
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.getinfo = function () {
        return "x:" + this._x + " , y:" + this._y; // string interpolacija 
    };
    return Shape;
}());
exports.Shape = Shape;
