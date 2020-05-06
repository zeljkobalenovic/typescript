// abstract klasa ima bar jednu abstraktnu metodu (samo definicija u njoj)
// kad je klasa abstraktna nemoze se praviti instanca klase
export abstract class Shape {
    constructor(private _x: number,private _y: number){}
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }    
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    getinfo() : string {
        return `x:${this._x} , y:${this._y}`;      // string interpolacija 
    }
    // svaka klasa koja nasledjuje ovu mora implementirati ovaj metod
    abstract calculateArea() : number;
}