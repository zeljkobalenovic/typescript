class Customer7 {
    private _firstName: string;
    private _lastName: string;

    // vs code automatski moze da generise accessore isto kao getere+setere u javi 
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    constructor (param1:string , param2:string){
        this._firstName=param1;
        this._lastName=param2;
    }
    
    public get firstName() : string {
        return this._firstName;
    }
    
    public set firstName(v : string) {
        this._firstName = v;
    }
        
}
let customer7 = new Customer7("Milica","Kostic");
console.log(customer7.firstName);
console.log(customer7.lastName);


