import { Person } from "./Person";

// kreiramo instancu person koja NIJE u fajlu , ali smo je importovali. Dalje sve kao da je ovde napisana
let person = new Person('Dragoljub','Pilic');
console.log(person.firstName + ' ' + person.lastName);
