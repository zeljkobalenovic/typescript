// ime klase kao ime ts fajla ( NIJE OBAVEZNO )
class Customer {    
    firstName: string | undefined;
    lastName: string | undefined;
}

// Pravljenje instance klase ( default constructor )
let customer : Customer = new Customer();
// pristup properties moze ovako jer je po default public
customer.firstName = "Petar";
customer.lastName = 'Jovic';
console.log(customer.firstName + ' ' + customer.lastName)

//-------------------------------------------------------------------------------
class Customer2 {
    // properties (sada private -> pristup samo u klasi - zato moraju geteri i seteri za pristup)
    private firstName : string;
    private lastName : string;
    // konstruktor 
    constructor (param1:string , param2:string ) {
        this.firstName=param1;
        this.lastName=param2;
    }
    // geter+seter (za svaki parametar treba) - po DEFAULTU je PUBLIC pa nenavodimo
    getfirstName () {
        return this.firstName;
    }
    setfirstName (param:string) {
        this.firstName=param;
    }
}
// pravljenje instance klase sa konstruktorom
let customer2 = new Customer2('Marko',"Markovic");
// mozemo pristupati samo firstname , lastname nema ni geter ni seter 
console.log(customer2.getfirstName());
customer2.setfirstName('Zeljko');
console.log(customer2.getfirstName());

//----------------------------------------------------------------------------------
class Customer3 {
    // ovakav konstruktor pravi properties firstName i lastName sa datim pristupom i setuje ih
    // za npr. pristup lastName fale seter i geter
    constructor ( public firstName : string , private lastName : string) {}   
    // ovako se cesto koristi jer je najkrace i najpristupacnije
}
let customer3 = new Customer3('Bata','Nikolic');
console.log(customer3.firstName);
customer3.firstName='Batica';
console.log(customer3.firstName);

//-----------------------------------------------------------------------------------
class Customer4 {
    constructor (private firstName:string , private lastName:string) {}
    // za firstname klasican geter+seter -> za razliku od gore SA TIPOM povratne vrednosti -TAKO TREBA (nije obavezno)
    getfirstName() : string {
        return this.firstName;
    }
    setfirstName(param : string) : void {       // nema povratne vrednosti pa se nestavlja nista ili void ( isto kao u javi )
        this.firstName=param;
    }
    // za lastname accessor - ime metoda je nebitno - bitno je telo metode (sta radi). 
    // ali NEMOZE biti isto kao ime propertija (ja sam koristio malo slovo n da se razlikuje lastname())
    // Uobicajeno je da ime propertija bude _lastName , accessor da bude get/set lastName()
    // onda je _ime interno ime propertija , a van klase mu pristupamo sa get/set imenom npr. customer4.lastName
    // properties sa accessorom se pristupa direktno kao da su public.
    // za koriscenje accessor mora se tsc konfigurisati da kompajlira ES5 ili noviji 
    // za return type get moze sta vraca , a za set NESME NISTA ( ni void kao kod obicnog setera)
    get lastname() : string {
        return this.lastName;
    }
    set lastname(param:string) {
        this.lastName=param;
    }
}
let customer4 = new Customer4('Ana', 'Milic');
console.log(customer4.getfirstName() + ' ' + customer4.lastname);
customer4.setfirstName('Milica');
customer4.lastname='Vargic';     // pazi NE ime propertija nego ime set metoda zato bolje sa _ime , pa get/set ime()
console.log(customer4.getfirstName() + ' ' + customer4.lastname);

//-------------------------------------------------------------------------------------------
class Customer5 {
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
let customer5 = new Customer5("Milica","Pesic");
console.log(customer5.firstName);
console.log(customer5.lastName);


