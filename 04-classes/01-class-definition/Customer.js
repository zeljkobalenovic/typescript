// ime klase kao ime ts fajla ( NIJE OBAVEZNO )
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
// Pravljenje instance klase ( default constructor )
var customer = new Customer();
// pristup properties moze ovako jer je po default public
customer.firstName = "Petar";
customer.lastName = 'Jovic';
console.log(customer.firstName + ' ' + customer.lastName);
//-------------------------------------------------------------------------------
var Customer2 = /** @class */ (function () {
    // konstruktor 
    function Customer2(param1, param2) {
        this.firstName = param1;
        this.lastName = param2;
    }
    // geter+seter (za svaki parametar treba) - po DEFAULTU je PUBLIC pa nenavodimo
    Customer2.prototype.getfirstName = function () {
        return this.firstName;
    };
    Customer2.prototype.setfirstName = function (param) {
        this.firstName = param;
    };
    return Customer2;
}());
// pravljenje instance klase sa konstruktorom
var customer2 = new Customer2('Marko', "Markovic");
// mozemo pristupati samo firstname , lastname nema ni geter ni seter 
console.log(customer2.getfirstName());
customer2.setfirstName('Zeljko');
console.log(customer2.getfirstName());
//----------------------------------------------------------------------------------
var Customer3 = /** @class */ (function () {
    // ovakav konstruktor pravi properties firstName i lastName sa datim pristupom i setuje ih
    // za npr. pristup lastName fale seter i geter
    function Customer3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer3;
}());
var customer3 = new Customer3('Bata', 'Nikolic');
console.log(customer3.firstName);
customer3.firstName = 'Batica';
console.log(customer3.firstName);
//-----------------------------------------------------------------------------------
var Customer4 = /** @class */ (function () {
    function Customer4(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // za firstname klasican geter+seter -> za razliku od gore SA TIPOM povratne vrednosti -TAKO TREBA (nije obavezno)
    Customer4.prototype.getfirstName = function () {
        return this.firstName;
    };
    Customer4.prototype.setfirstName = function (param) {
        this.firstName = param;
    };
    Object.defineProperty(Customer4.prototype, "lastname", {
        // za lastname accessor - ime metoda je nebitno - bitno je telo metode (sta radi). 
        // ali NEMOZE biti isto kao ime propertija (ja sam koristio malo slovo n da se razlikuje lastname())
        // Uobicajeno je da ime propertija bude _lastName , accessor da bude get/set lastName()
        // onda je _ime interno ime propertija , a van klase mu pristupamo sa get/set imenom npr. customer4.lastName
        // properties sa accessorom se pristupa direktno kao da su public.
        // za koriscenje accessor mora se tsc konfigurisati da kompajlira ES5 ili noviji 
        // za return type get moze sta vraca , a za set NESME NISTA ( ni void kao kod obicnog setera)
        get: function () {
            return this.lastName;
        },
        set: function (param) {
            this.lastName = param;
        },
        enumerable: true,
        configurable: true
    });
    return Customer4;
}());
var customer4 = new Customer4('Ana', 'Milic');
console.log(customer4.getfirstName() + ' ' + customer4.lastname);
customer4.setfirstName('Milica');
customer4.lastname = 'Vargic'; // pazi NE ime propertija nego ime set metoda zato bolje sa _ime , pa get/set ime()
console.log(customer4.getfirstName() + ' ' + customer4.lastname);
//-------------------------------------------------------------------------------------------
var Customer5 = /** @class */ (function () {
    function Customer5(param1, param2) {
        this._firstName = param1;
        this._lastName = param2;
    }
    Object.defineProperty(Customer5.prototype, "lastName", {
        // vs code automatski moze da generise accessore isto kao getere+setere u javi 
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer5.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: true,
        configurable: true
    });
    return Customer5;
}());
var customer5 = new Customer5("Milica", "Pesic");
console.log(customer5.firstName);
console.log(customer5.lastName);
