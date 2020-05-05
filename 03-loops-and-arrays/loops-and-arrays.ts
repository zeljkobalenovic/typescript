// klasicna for petlja 
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// niz + petlja
let grade : number [] = [5,4,2,3.5,4,3.2]   // 
for (let i = 0; i < grade.length; i++) {
    console.log(grade[i]);    
}
// skraceno for petlja ( kroz ceo niz )
for (let tempGrade of grade) {
    console.log(tempGrade);
}
// sa nekom matematikom
let total : number = 0;
for (let i = 0; i < grade.length; i++) {
    total = total + grade[i];    
}
let average = total/grade.length;
console.log(`Prosecna ocena je ${average.toFixed(4)}`);
// petlja sa konditional
let sports : string [];
sports = ['fudbal','kosarka',"odbojka"];
for ( let sport of sports ) {
    if (sport == 'kosarka') {
        console.log(`${sport} je moj omiljen sport`);
    } else {
        console.log(sport + " pratim slabije")
    }
}
// VAZNO !!! za razliku od jave u typescript nizovi nisu fiksni 
console.log("Niz ima :" + sports.length + ' clanova');
sports.push("tenis"); // dodaje tenis na kraj niza
// sports.splice(0,3); // ovo npr. uklanja 3 clana niza pocevsi od 0 ( index 0 ima prvi clan niza - kao u javi )
// niz je objekat kao u javi , koji ima svoje property i svoje metode -> npr. property-lenght i method-join()
console.log("Niz ima :" + sports.join("--") + ' clanova');
console.log("Niz ima :" + sports.length + ' clanova');

// moze i niz razlicitih elemenata - retko ima smisla
let babeIZabe : any [] = ['baba',56.45,false,100,'zaba'];
console.log("Niz babe i zabe  :" + babeIZabe.join("--") + ' !!!');

// DRUGI nacin deklarisanja niza - kao generici u javi :   niz : string [] (je isto sto i) niz : Array<string>
let nizneki: Array<any> ; 
nizneki = babeIZabe;
console.log("Niz nizneki :" + nizneki.join("--") + ' !!!');




