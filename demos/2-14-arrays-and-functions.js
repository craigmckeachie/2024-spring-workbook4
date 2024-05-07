"use strict";

// returns an array of names
function getKids() {
  let kids = ["Natalie", "Brittany", "Zachary"];
  return kids;
}
// displays data in an array of names
// function displayKids(kids) {
//   for (let i = 0; i < kids.length; i++) {
//     console.log(kids[i]);
//   }
// }

function displayKids(kids) {
  for (const kid of kids) {
    console.log(kid);
  }
}
let ourKids = getKids(); // returns an array
displayKids(ourKids); // pass an array
