// Klase praviti na sledeca dva nacina 
// TRADICIONALNI
class Person1 {
    // konvencija se da ime propertija krece sa underscore (interno ime). Po defaultu su public , zato mora private
    private _firstName: string;
    private _lastName: string;
    // ... vise propertija
    constructor (param1:string,param2:string) {
        this._firstName=param1;
        this._lastName=param2;
    }
    // accessori za parametre ( po defaultu su public - nije neophodno )
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}
// Koriscenje klase Person1
let person1 : Person1 = new Person1('Ana','Bjelica'); // eksplicitan tip
person1.firstName='Marijana';
console.log(person1.lastName);
// ... itd.
// -------------------------------------------------------------------------------------------------------------------
// MODERNI-KRACI (properties parametri konstruktora) - OVO NAJCESCE
class Person2 {
    // potpuno isto kao gore (ovakav konstruktor ce napraviti propertije i dodeliti im vrednost)
    constructor(private _firstName:string, private _lastName:string) {}
    // accessori za parametre
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}
// Koriscenje klase Person2
let person2 = new Person2('Marija','LJubicic'); // implicitan tip
person2.firstName='Darija';
console.log(person2.lastName);


// ... itd.
//--------------------------------------------------------------------------------------------------------------------