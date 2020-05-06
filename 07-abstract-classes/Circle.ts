import { Shape } from "./Shape";

// subklasa nasledjuje abstraktnu -> zato mora implementirati abstraktni metod (ili ce i sama biti abstraktna)
export class Circle extends Shape {
  
    // konstruktor sa dva obicna parametra + jedan properties parametar
    constructor(x:number,y:number,
                private _radius: number) {
                    super(x,y);   // superkonstruktor pravi i dodeljuje vrednosti 2 parametra , a treci ovaj konstruktor
                }
    // accessori za dodatni parametar
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    // overajdovana metoda superklase ( subklasa moze i svoje metode dodavati , kao sto je dodala svoj properties)
    getinfo() : string {
        return super.getinfo() + ` , radius:${this._radius}`
    }
     // mora implementirati ovu metodu
     calculateArea(): number {
        return Math.PI*Math.pow(this._radius,2);
    }
}