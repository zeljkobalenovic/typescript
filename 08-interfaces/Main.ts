import { FotballManager } from "./FotballManager";
import { BasketballManager } from "./BasketballManager";
import { Manager } from "./Manager";

// koriscenje klasa sa interfejsima redovno
// let manager = new Manager();    // ovo nemoze - interfejs se nemoze instancirati
let fotballManager = new FotballManager();
let basketballManager = new BasketballManager();

console.log(fotballManager.dailyPlan());
console.log(basketballManager.dailyPlan());

console.log("Pregled iz niza :")

let managers : Manager [] = [];
managers.push(fotballManager);
managers.push(basketballManager);
for (let manager of managers) {
    console.log(manager.dailyPlan());
}