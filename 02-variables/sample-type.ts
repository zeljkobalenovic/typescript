// primeri varijabli 
let found : boolean = true;             // full - explicitno zadavanje tipa + dodeljivanje vrednosti
let grade : number = 7.28;
let firstName : string = "zeljko";
let lastName : string = 'balenovic';
let fullName = "Balenovic Zeljko";      // implicitno zadavanje tipa 

// wrong !!! compile error
/*
found = 100;
grade = 'Baki';
firstName = false;
fullName = false;
*/
console.log(found);
console.log("Grade is : " + grade);
console.log("Welcome " + firstName + ' ' + lastName);
// string template moze umesto gornjeg - jednostavnije
console.log(`Welcome back  ${firstName} ${lastName}`);



