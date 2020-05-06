import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

/*  vise se nemoze instancirati jer je abstract
 let myShape = new Shape(3,5);  
console.log(myShape.getinfo());
*/
let myCircle = new Circle(2,6,10);
console.log(myCircle.getinfo());

let myRectangle = new Rectangle(0,0,5,6);
console.log(myRectangle.getinfo());

// niz objekata 
let myArray : Shape[] = [];
// myArray.push(myShape);
myArray.push(myCircle);
myArray.push(myRectangle);
console.log("Prikaz niza objekata u petlji :")
for (let shape of myArray) {
    console.log(shape.getinfo());
    console.log(shape.calculateArea());
    console.log();
}