"use strict";

//indexOf on string
// let teamName = "New York Knicks";
// let position = teamName.indexOf("z");
// console.log(position);

// if (position == -1) {
//   console.log("Not found");
// }

//indexOf on array of strings
let teams = [
  "New York Knicks",
  "Indiana Pacers",
  "Memphis Grizzlies",
  "Denver Nuggets",
];

let positionInArray = teams.indexOf("Memphis Grizzlies");
console.log(positionInArray); //2, zero-based

let positionInArray1 = teams.indexOf("Cleveland Browns");
console.log(positionInArray1); //doesn't exist -1

