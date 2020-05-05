// klasicna for petlja 
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
// niz + petlja
var grade = [5, 4, 2, 3.5, 4, 3.2]; // 
for (var i_2 = 0; i_2 < grade.length; i_2++) {
    console.log(grade[i_2]);
}
// skraceno for petlja ( kroz ceo niz )
for (var _i = 0, grade_1 = grade; _i < grade_1.length; _i++) {
    var tempGrade = grade_1[_i];
    console.log(tempGrade);
}
// sa nekom matematikom
var total = 0;
for (var i_3 = 0; i_3 < grade.length; i_3++) {
    total = total + grade[i_3];
}
var average = total / grade.length;
console.log("Prosecna ocena je " + average.toFixed(4));
// petlja sa konditional
var sports;
sports = ['fudbal', 'kosarka', "odbojka"];
for (var _a = 0, sports_1 = sports; _a < sports_1.length; _a++) {
    var sport = sports_1[_a];
    if (sport == 'kosarka') {
        console.log(sport + " je moj omiljen sport");
    }
    else {
        console.log(sport + " pratim slabije");
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
var babeIZabe = ['baba', 56.45, false, 100, 'zaba'];
console.log("Niz babe i zabe  :" + babeIZabe.join("--") + ' !!!');
// DRUGI nacin deklarisanja niza - kao generici u javi :   niz : string [] (je isto sto i) niz : Array<string>
var nizneki;
nizneki = babeIZabe;
console.log("Niz nizneki :" + nizneki.join("--") + ' !!!');
// petlja moze i sa while kao u javi ( obe varijante )
// sa uslovom na pocetku, kada se blok koda izvrsi u zavisnosti od uslova ili kraju, kada se blok koda UVEK bar jednom izvrsi)
var i = 0;
while (i < babeIZabe.length) {
    console.log(babeIZabe[i]);
    i++;
}
i = 0;
do {
    console.log(babeIZabe[i]);
    i++;
} while (i < babeIZabe.length);
