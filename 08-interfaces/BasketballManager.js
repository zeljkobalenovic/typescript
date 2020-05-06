"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// klasa koja implementira interfejs moze imati propertija i metoda , ali MORA implementirati metode interfejsa
var BasketballManager = /** @class */ (function () {
    function BasketballManager() {
    }
    // implementacija metoda interfejsa
    BasketballManager.prototype.dailyPlan = function () {
        return "Vezbati kontre i pik.";
    };
    return BasketballManager;
}());
exports.BasketballManager = BasketballManager;
