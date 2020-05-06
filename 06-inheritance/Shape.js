"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// osnovna superklasa - klasika properties konstruktor+accessori+metoda (nemora public default je , a i moze)
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
