import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(3,5);
console.log(myShape.getinfo());

let myCircle = new Circle(2,6,8);
console.log(myCircle.getinfo());

let myRectangle = new Rectangle(0,0,5,9);
console.log(myRectangle.getinfo());

// niz objekata 
let myArray : Shape[] = [];
myArray.push(myShape);
myArray.push(myCircle);
myArray.push(myRectangle);
console.log("Prikaz niza objekata u petlji :")
for (let shape of myArray) {
    console.log(shape.getinfo());
}