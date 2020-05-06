"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FotballManager_1 = require("./FotballManager");
var BasketballManager_1 = require("./BasketballManager");
// koriscenje klasa sa interfejsima redovno
// let manager = new Manager();    // ovo nemoze - interfejs se nemoze instancirati
var fotballManager = new FotballManager_1.FotballManager();
var basketballManager = new BasketballManager_1.BasketballManager();
console.log(fotballManager.dailyPlan());
console.log(basketballManager.dailyPlan());
console.log("Pregled iz niza :");
var managers = [];
managers.push(fotballManager);
managers.push(basketballManager);
for (var _i = 0, managers_1 = managers; _i < managers_1.length; _i++) {
    var manager = managers_1[_i];
    console.log(manager.dailyPlan());
}
