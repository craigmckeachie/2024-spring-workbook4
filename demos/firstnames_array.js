"use strict";

let firstNames = ["Nedret", "Chris", "Nathaniel", "Yusuf", "Scott", "Erik", "Denzel"];
// console.log(firstNames[1]); //Chris
// console.log(firstNames.length);

for (let index = 0; index < firstNames.length; index++) {
    console.log(firstNames[index]);
}

for (let firstName of firstNames) {
    console.log(firstName);
}
