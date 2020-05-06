"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
/*  vise se nemoze instancirati jer je abstract
 let myShape = new Shape(3,5);
console.log(myShape.getinfo());
*/
var myCircle = new Circle_1.Circle(2, 6, 10);
console.log(myCircle.getinfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 5, 6);
console.log(myRectangle.getinfo());
// niz objekata 
var myArray = [];
// myArray.push(myShape);
myArray.push(myCircle);
myArray.push(myRectangle);
console.log("Prikaz niza objekata u petlji :");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var shape = myArray_1[_i];
    console.log(shape.getinfo());
    console.log(shape.calculateArea());
    console.log();
}
