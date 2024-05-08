"use strict";

let kids = ["Natalie", "Brittany", "Zachary"];

for (let index = 0; index < kids.length; index++) {
  const kid = kids[index];
  console.log(kid);
}

console.log();
//dog of dogs
//cat of cats
//course of courses
//product of products
//singular of plural
//singular (object, string, number) of plural (array)
for (let kid of kids) {
  console.log(kid);
}
