"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
// subklasa nasledjuje osnovnu (moze samo JEDNU)
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    // konstruktor sa dva obicna parametra + jedan properties parametar
    function Circle(x, y, _radius) {
        var _this = _super.call(this, x, y) || this;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        // accessori za dodatni parametar
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    // overajdovana metoda superklase ( subklasa moze i svoje metode dodavati , kao sto je dodala svoj properties)
    Circle.prototype.getinfo = function () {
        return _super.prototype.getinfo.call(this) + (" , radius:" + this._radius);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
